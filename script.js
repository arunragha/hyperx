const chatMessages = document.querySelector('.chat__messages');
const messageInput = document.querySelector('.sendMessage');
const sendButton = document.querySelector('.chat__inputButton');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const statusIndicators = document.querySelectorAll('.status');

// Function to add a new message
function addMessage(username, message, timestamp) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `
    <img src="../images/${username.toLowerCase()}.jpg" alt="avatar">
    <div class="message__info">
      <h4>${username}<span class="message__timestamp">${timestamp}</span></h4>
      <p>${message}</p>
    </div>
  `;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for sending messages
sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    const now = new Date();
    const timestamp = now.getHours().toString().padStart(2, '0') + ':' + 
                      now.getMinutes().toString().padStart(2, '0');
    addMessage('Gamer', message, timestamp);
    messageInput.value = '';
  }
});

// Allow sending messages with Enter key
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});

// Toggle sidebar on mobile
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

// Randomly change online status
function updateOnlineStatus() {
  statusIndicators.forEach(indicator => {
    indicator.style.backgroundColor = Math.random() > 0.5 ? '#4fb185' : '#747f8d';
  });
}

// Update status every 5 seconds
setInterval(updateOnlineStatus, 5000);

// Initial status update
updateOnlineStatus();