

// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  async parse(message) {
    await fetch('http://localhost:8000/api/chatbot', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"query": message})
    }).then(response => response.json())
      .then(data => {
        this.actionProvider.Response(data);
      });
  }
}


export default MessageParser;