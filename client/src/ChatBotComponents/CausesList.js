import React from "react";

import "./style.css";

const CausesList = props => {
  const list = [
    { text: "Alcohol or drug use", handler: props.actionProvider.HandleAlcoholDrugUse, id: 1 },
    { text: "Domestic violence", handler: props.actionProvider.HandleDomesticViolence, id: 2 },
    { text: "Family relationship", handler: props.actionProvider.HandleFamilyRelationship, id: 3 },
    { text: "Finance", handler: props.actionProvider.HandleFinance, id: 4 },
    { text: "Health issues", handler: props.actionProvider.HandleHealthIssues, id: 5 },
    { text: "Natural disaster", handler: props.actionProvider.HandleNaturalDisaster, id: 6 },
    { text: "Housing issues", handler: props.actionProvider.HandleHousingIssues, id: 7}
  ];

  const optionsMarkup = list.map(option=> (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default CausesList;