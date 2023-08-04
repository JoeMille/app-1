// script.js

const messages = [
    "Take a deep breath and relax.",
    "Focus on the sensation of your breath.",
    "Allow any thoughts to come and go without judgment.",
    "Embrace this moment of stillness and peace.",
    "You are in control of your thoughts and emotions.",
    "Continue to breathe deeply and calmly.",
    "When you're ready, gently open your eyes and return to the present moment."
  ];
  
  let timer;
  let timerDuration;
  let messageIndex = 0;
  let messageTimeout;
  
  function startTimer(minutes) {
    if (timer) {
      clearInterval(timer);
    }
  
    timerDuration = minutes * 60;
    updateTimerDisplay();
    showMessage(messages[messageIndex]);
  
    timer = setInterval(() => {
      timerDuration--;
      updateTimerDisplay();
  
      if (timerDuration === 0) {
        clearInterval(timer);
        showMessage("Meditation timer is complete!");
      } else if (timerDuration % 20 === 0) {
        // Show a new message every 20 seconds
        messageIndex++;
        showMessage(messages[messageIndex]);
      }
    }, 1000);
  }
  
  function updateTimerDisplay() {
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
  
    const minutes = Math.floor(timerDuration / 60).toString().padStart(2, "0");
    const seconds = (timerDuration % 60).toString().padStart(2, "0");
  
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
  }
  
  function showMessage(message) {
    const messagesContainer = document.querySelector(".messages-container");
  
    // Clear previous message timeout if it exists
    clearTimeout(messageTimeout);
  
    // Clear previous messages if any
    while (messagesContainer.firstChild) {
      messagesContainer.removeChild(messagesContainer.firstChild);
    }
  
    const messageContainer = document.createElement("div");
    messageContainer.textContent = message;
    messageContainer.className = "message";
  
    messagesContainer.appendChild(messageContainer);
  
    // Hide the message after 10 seconds
    messageTimeout = setTimeout(() => {
      messageContainer.style.display = "none";
    }, 10000);
  }
  
  function stopTimer() {
    clearInterval(timer);
    updateTimerDisplay();
  }
  