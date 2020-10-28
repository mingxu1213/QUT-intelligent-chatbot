// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  Response(cause) {
    const robotReply = GenerateReplyMessage(cause);
    const response = this.createChatBotMessage(robotReply, {widget: cause});
    this.UpdateChatbotState(response);
  }

  HandleAlcoholDrugUse = () => {
    const message = this.createChatBotMessage(
      "Substance abuse is when you take drugs that are not legal. It’s also when you use alcohol, prescription medicine, and other legal substances too much or in the wrong way.",
      {
        widget: "alcohol or drug use"
      }
    );
    this.UpdateChatbotState(message);
  }
  HandleDomesticViolence = () => {
    const message = this.createChatBotMessage(
      "Domestic violence, or family violence, is violent, abusive or intimidating behaviour in a relationship. There are many types of domestic violence, including emotional, sexual, social, financial, spiritual and physical abuse.",
      {
        widget: "domestic violence"
      }
    );
    this.UpdateChatbotState(message);
  }

  HandleFamilyRelationship = () => {
    const message = this.createChatBotMessage(
      ". All relationships and families go through difficult times and experiencing occasional problems and conflict in personal relationships is normal. However, sometimes these problems can become overwhelming. Signs of family and relationship problems include frequent arguing, disagreements, breakdown in communication, angry outbursts, avoidance and physical conflict.",
      {
        widget: "family relationship"
      }
    );
    this.UpdateChatbotState(message);
  }

  HandleFinance = () => {
    const message = this.createChatBotMessage(
      "Some situations that might cause financial stress include losing your job or being retrenched, long term unemployment, being unable to get full time work, inability to pay your bills or not being able to deal with the increasing costs of living.",
      {
        widget: "finance"
      }
    );
    this.UpdateChatbotState(message);
  }

  HandleHealthIssues = () => {
    const message = this.createChatBotMessage(
      "Health issue occurs when the normal metabolism of the body failed or altered due to pollutant, pathogen or other means that cause health problem which are considered as disease.",
      {
        widget: "health issues"
      }
    );
    this.UpdateChatbotState(message);
  }

  HandleNaturalDisaster = () => {
    const message = this.createChatBotMessage(
      "A natural disaster is a major adverse event resulting from natural processes of the Earth; examples are floods, hurricanes, tornadoes, volcanic eruptions, earthquakes, tsunamis, storms, and other geologic processes.",
      {
        widget: "natural disaster"
      }
    );
    this.UpdateChatbotState(message);
  }

  HandleHousingIssues = () => {
    const message = this.createChatBotMessage(
      "If you are living on the streets (primary homelessness); moving between temporary shelters, including houses of friends, family and emergency accommodation; living in private boarding houses without a private bathroom or security of tenure. The links below might help.",
      {
        widget: "housing issues"
      }
    );
    this.UpdateChatbotState(message);
  }

  HandleUndefined = () => {
    const message = this.createChatBotMessage(
      "I am sorry, I can not understand you. Do you have concerns about the following sections?",
      {
        widget: "causesList"
      }
    );
    this.UpdateChatbotState(message);
  }

  UpdateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
  
}

const GenerateReplyMessage = cause => {
  switch(cause) {
    case 'alcohol or drug use':
      return 'It seems the concern is about "alcohol or drug abuse", the links below might be helpful:';
    case 'domestic violence':
      return 'It seems the concern is about "domestic violence", the links below might be helpful:';
    case 'family relationship':
      return 'It seems the concern is about "family relationship", the links below might be helpful:';
    case 'finance':
      return 'It seems the concern is about "finance", the links below might be helpful:';
    case 'health issues':
      return 'It seems the concern is about "health issues", the links below might be helpful:';
    case 'natural disaster':
      return 'It seems the concern is about "natural disaster", the links below might be helpful:';
    case 'housing issues':
      return 'It seems the concern is about "housing issues", the links below might be helpful:';
    case 'undefined':
      return 'I am sorry, I do not fully understand you. Do you have concerns about the following sections?'
    default:
      return 'undefined'
  }
}

export default ActionProvider;