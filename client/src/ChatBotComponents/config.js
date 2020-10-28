// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import CausesList from './CausesList';
import LinkWebsites from './LinkWebsites';

const botName = "QUTBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage("Hello, how could I help you today?")
  ],

  widgets: [
    {
      widgetName: "undefined",
      widgetFunc: props => <CausesList {...props}/>,
    },
    {
      widgetName: "alcohol or drug use",
      widgetFunc: props => <LinkWebsites {...props} />,
      props: {
        options: [
          {
            text: "The Salvation Army",
            url:
              "https://www.salvationarmy.org.au/need-help/alcohol-and-other-drug-services/",
            id: 1,
            detail:
              "Residential treatment centres, community-based support programs, counselling and withdrawal management services are just some of the options available from the Salvation Army alcohol and drug support services."
          },
          {
            text: "Mission Australia",
            url:
              "https://www.missionaustralia.com.au/servicedirectory/185-alcohol-other-drugs",
            id: 2,
            detail:
              "MA Alcohol & Other drug services offerings include residential and non-residential treatment, assessment, referral, withdrawal, and intervention services."
          },
          {
            text: "Hello Sunday Morning",
            url: "https://hellosundaymorning.org/daybreak/",
            id: 3,
            detail:
              "Hello Sunday Morning is an Australian not-for-profit organisation dedicated to helping people who want to change their relationship with alcohol."
          },
        ],
      }, 
    },
    {
      widgetName: "domestic violence",
      widgetFunc: props => <LinkWebsites {...props} />,
      props: {
        options: [
          {
            text: "The Salvation Army",
            url:
              "https://www.salvationarmy.org.au/need-help/family-and-domestic-violence/",
            id: 1,
            detail: 
              "The Salvation Army provides a wide range of services around the country to support women and women with children impacted by family and domestic violence."
          },
          {
            text: "Mission Australia",
            url:
              "https://www.missionaustralia.com.au/servicedirectory/189-family-domestic-violence",
            id: 2,
            detail:
              "Our domestic and family violence services provide safety planning, help obtain effective legal protection and provide access to a network of professional services to assist with other legal and social welfare needs, such as support programs and accommodation."
          },
          {
            text: "1800Respect",
            url: "http://www.1800respect.org.au/",
            id: 3,
            detail:
              "1800Respect is Australia's national sexual assault, domestic and family violence counselling service."
          },
        ],
      }, 
    },
    {
      widgetName: "family relationship",
      widgetFunc: props => <LinkWebsites {...props} />,
      props: {
        options: [
          {
            text: "Australian Red Cross",
            url:
              "https://www.redcross.org.au/get-help/community-services/telecross",
            id: 1,
            detail: 
              "Telecross provides individuals a daily telephone call to check on their wellbeing."
          },
          {
            text: "The Salvation Army",
            url:
              "https://www.salvationarmy.org.au/need-help/positive-lifestyle-program/",
            id: 2,
            detail:
              "The Salvation Army’s Positive Lifestyle Program is a fully supported eight module course that helps empower people to change their way of life through confidential one-on-one sessions with a trained facilitator."
          },
          {
            text: "Griefline",
            url: "https://griefline.org.au/",
            id: 3,
            detail:
              "Griefline provides free counselling services and support to anyone experiencing grief loss and or trauma Australia wide."
          },
        ],
      }, 
    },
    {
      widgetName: "finance",
      widgetFunc: props => <LinkWebsites {...props} />,
      props: {
        options: [
          {
            text: "Money Smart",
            url:
              "https://moneysmart.gov.au/managing-debt/financial-counselling",
            id: 1,
            detail: 
              "Financial counselling is a free and confidential service offered by community organisations, community legal centres and some government agencies."
          },
          {
            text: "The Salvation Army",
            url:
              "https://www.salvationarmy.org.au/need-help/financial-assistance/youre-the-boss/",
            id: 2,
            detail:
              "Swap the pain of financial uncertainty for the peace and confidence that understanding brings with our award-winning financial-skill-building program, You’re the Boss."
          },
          {
            text: "Thriving Communities Partnership",
            url: "https://thriving.org.au/what-we-do/economic-abuse-reference-group",
            id: 3,
            detail:
              "The Economic Abuse Reference Group (EARG) is a group of community organisations aiming to improve business and government responses to economic abuse, and therefore reduce the negative financial impact of family violence."
          },
        ],
      }, 
    },
    {
      widgetName: "health issues",
      widgetFunc: props => <LinkWebsites {...props} />,
      props: {
        options: [
          {
            text: "Marie Curie Palliative Care Research Department at UCL",
            url:
              "http://www.homelesspalliativecare.com/",
            id: 1,
            detail: 
              "This research informed toolkit provides information and resources for frontline staff supporting people who are homeless and who have significant health needs. It includes a range a resources including bereavement, supporting clients' palliative and end of life care and communicating with clients about understanding grief. The research upon which this toolkit is based was funded by a grant from The Oak Foundation with support from Pathway, Marie Curie and the Marie Curie Palliative Care Research Department at UCL."
          },
          {
            text: "Mission Australia",
            url:
              "https://www.missionaustralia.com.au/what-we-do/employment-skills-training/disability-employment-services",
            id: 2,
            detail:
              "If you are a job seeker with a disability, injury or health condition, Mission Australia can provide you with tailored services to help you find and keep a job."
          },
          {
            text: "Hello Sunday Morning",
            url: "https://www.khanacademy.org/",
            id: 3,
            detail:
              "Hello Sunday Morning is an Australian not-for-profit organisation dedicated to helping people who want to change their relationship with alcohol."
          },
        ],
      }, 
    },
    {
      widgetName: "natural disaster",
      widgetFunc: props => <LinkWebsites {...props} />,
      props: {
        options: [
          {
            text: "Australia government",
            url:
              "https://info.australia.gov.au/information-and-services/public-safety-and-law/emergency-services/emergency-and-disaster-assistance",
            id: 1,
            detail: 
              "Emergency and disaster assistance."
          },
          {
            text: "Money smart",
            url:
              "https://moneysmart.gov.au/dealing-with-natural-disasters/what-to-do-after-a-natural-disaster",
            id: 2,
            detail:
              "Talk to someone qualified and experienced about your situation. They can explain the options available to support you. "
          },
          {
            text: "Lifeline",
            url: "https://www.lifeline.org.au/get-help/information-and-support/bushfire/",
            id: 3,
            detail:
              "Natural disasters like bushfires, floods, cyclones, drought, and other traumatic ‘natural’ events are extremely challenging for the people directly affected. The stress caused following a natural disaster can lead to ‘burnout’ and physical, mental, and emotional exhaustion. "
          },
        ],
      }, 
    },
    {
      widgetName: "housing issues",
      widgetFunc: props => <LinkWebsites {...props} />,
      props: {
        options: [
          {
            text: "Homeless Hotline",
            url:
              "https://www.qld.gov.au/housing/emergency-temporary-accommodation/homeless-persons-information-qld",
            id: 1,
            detail: 
              "Homeless Hotline is a phone information and referral service for people who are experiencing homelessness or are at risk of homelessness."
          },
          {
            text: "AskIzzy",
            url:
              "https://askizzy.org.au/",
            id: 2,
            detail:
              "Find the help you need, now and nearby."
          },
          {
            text: "Emergency and temporary accommodation",
            url: "https://www.qld.gov.au/housing/emergency-temporary-accommodation",
            id: 3,
            detail:
              "Emergency and temporary accommodation."
          },
        ],
      }, 
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config