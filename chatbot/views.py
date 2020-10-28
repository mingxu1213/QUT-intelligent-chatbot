from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
from nltk.stem.snowball import SnowballStemmer

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report, accuracy_score, recall_score, precision_score
from sklearn.model_selection import cross_val_score


from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.svm import SVC
from sklearn.linear_model import SGDClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neural_network import MLPClassifier

import string
import numpy as np
import random
import json

stemmer = SnowballStemmer("english", ignore_stopwords=True)

class stemmed_count_vectorizer(CountVectorizer):
    def build_analyzer(self):
        analyzer = super(stemmed_count_vectorizer, self).build_analyzer()
        return lambda doc: ([stemmer.stem(w) for w in analyzer(doc)])
    
stemmed_count_vect = stemmed_count_vectorizer(stop_words='english')

entire_queries = []
correspond_labs = []
test_entire_queries = []
test_correspond_labs = []

with open("risks.json", "rb") as file:
    data = json.load(file)
for risk in data["risks"]:
    for query in risk["queries"]:
        correspond_labs.append(risk["class"])
        entire_queries.append(query)

text_clf = Pipeline([
            ('vect', stemmed_count_vect),
            ('tfidf', TfidfTransformer()),
            ('mnb', MultinomialNB(fit_prior=False))
            # ('bernoulli', BernoulliNB(fit_prior=False, alpha=0.001))
            # ('svc', SVC(kernel='rbf',gamma=0.1, probability=True))
            # ('sgd', SGDClassifier())
            # ('kn', KNeighborsClassifier())
            # ('dtree', DecisionTreeClassifier(criterion='entropy', splitter='best',))
            # ('mlp', MLPClassifier(hidden_layer_sizes=(300,), solver='lbfgs', alpha=0.001, learning_rate='invscaling'))
        ])
text_clf = text_clf.fit(entire_queries, correspond_labs)

with open("test.json", "rb") as file:
    data = json.load(file)
for risk in data["risks"]:
    for query in risk["queries"]:
        test_correspond_labs.append(risk["class"])
        test_entire_queries.append(query)

predicted = text_clf.predict(test_entire_queries)


cross_validation_score = cross_val_score(text_clf, entire_queries + test_entire_queries, correspond_labs + test_correspond_labs, cv=5)
accuracy_score_value = accuracy_score(test_correspond_labs, predicted)
recall_score_value = recall_score(test_correspond_labs, predicted, average='weighted')
precision_score_value = precision_score(test_correspond_labs, predicted, average='weighted')
print("cross validation score: %0.2f (+/- %0.2f)" % (cross_validation_score.mean(), cross_validation_score.std() * 2))
print("accuracy score:", accuracy_score_value)
print("recall score:", recall_score_value)
print("precision_score", precision_score_value)
print(text_clf.score(test_entire_queries, test_correspond_labs))
print(classification_report(test_correspond_labs, predicted))

def Predict(model, query):
    risk_class = ["alcohol or drug use", "domestic violence", "family relationship", "finance", "health issues", "housing issues", "natural disaster"]
    risk_score = dict(zip(risk_class, model.predict_proba([query])[0]))
    sorted_risk_score = {k: v for k, v in sorted(risk_score.items(), key=lambda item: item[1], reverse=True)}
    possible_risk = list(sorted_risk_score.keys())[0]
    if(sorted_risk_score[possible_risk] < 0.3):
        possible_risk = "undefined"

    return possible_risk

class ChatbotEndpoint(APIView):
    def post(self, request, *args, **kwargs):
        return Response(
            Predict(text_clf, request.data["query"])
        )