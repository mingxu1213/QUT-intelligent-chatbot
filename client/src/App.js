import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';

import ActionProvider from './ChatBotComponents/ActionProvider';
import MessageParser from './ChatBotComponents/MessageParser';
import config from './ChatBotComponents/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
