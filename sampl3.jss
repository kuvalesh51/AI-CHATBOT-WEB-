const botResponses = {
  "hello": "Hello! How can I assist you today?",
  "hi": "Hi there! What can I help you with?",
  "how are you": "I'm functioning perfectly! How can I help?",
  "bye": "Goodbye! Come back soon!",
  "default": "I'm not sure I understand. Could you please rephrase?"
};
function addMessage(message, isUser) {
  const div = document.createElement('div');
  div.classList.add('message', isUser ? 'user-message' : 'bot-message');
  const p = document.createElement('p');
  p.textContent = message;
  div.appendChild(p);
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function processUserInput() {
  const input = userInput.value.trim().toLowerCase();
  if (!input) return;
  addMessage(input, true);
  userInput.value = '';
  setTimeout(() => {
    let response = botResponses.default;
    for (const key in botResponses) {
      if (input.includes(key)) {
        response = botResponses[key];
        break;
      }
    }
    addMessage(response, false);
  }, 1000);
}
sendButton.addEventListener('click', processUserInput);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') processUserInput();
});
