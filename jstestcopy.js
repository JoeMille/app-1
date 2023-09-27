//Meditation Timer

//Message Array
const messages = [
    "Take three deep breaths....",
    "Focus on your breathing....",
    "Begin to remove any intruding thoughts, good or bad...",
    "Embrace this tranquility....",
    "Continue to breathe deeply....",
    "Focus on the quiet....",
    "Keep your shoulders relaxed and your head high....",
    "Continue to breathe deeply, clearing any further thoughts from your mind",
    "Bring your hands together and stretch to the sky....",
    "Lean your head back and hold your breath for five seconds....",
    "Close your eyes and imagine immersing into calm water...."
  ];
  
  let timer;
  let timerDuration;
  let messageIndex = 0;
  let backgroundAudio;
  
  // Function to start the timer
  function startTimer(minutes) {
    if (timer) {
        clearInterval(timer);
    }
    document.querySelector(".reset-button").addEventListener("click", resetTimer);
  
    timerDuration = minutes * 60;
    updateTimerDisplay();
    showMessage(messages[messageIndex]);
  
  // Trigger background audio 
  
    backgroundAudio = document.getElementById("background-audio");
    backgroundAudio.play();
  
    timer = setInterval(() => {
        timerDuration--;
        updateTimerDisplay();
  
        if (timerDuration === 0) {
            clearInterval(timer);
            showMessage("Meditation timer is complete!");
            stopBackgroundAudio();
        } else if (timerDuration % 10 === 0) {
            // Show a new message every 10 seconds
            messageIndex++;
            showMessage(messages[messageIndex]);
        }
    }, 1000);
  }
  
  // Function to update the timer display
  
  function updateTimerDisplay() {
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
  
    const minutes = Math.floor(timerDuration / 60).toString().padStart(2, "0");
    const seconds = (timerDuration % 60).toString().padStart(2, "0");
  
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
  }
  
  // Function to show messages as timer continues
  
  function showMessage(message) {
    const messagesContainer = document.querySelector(".messages-container");
  
  // Clear previous messages
    while (messagesContainer.firstChild) {
        messagesContainer.removeChild(messagesContainer.firstChild);
    }
  
    const messageContainer = document.createElement("div");
    messageContainer.textContent = message;
    messageContainer.className = "message";
  
    messagesContainer.appendChild(messageContainer);
  }
  
  // Function to stop the timer
  function stopTimer() {
    clearInterval(timer);
    updateTimerDisplay();
    stopBackgroundAudio();
  }
  
  // Function to reset the timer
  
  function resetTimer() {
    clearInterval(timer);
    timerDuration = 0;
    messageIndex = 0;
    updateTimerDisplay();
    showMessage(messages[messageIndex]);
    stopBackgroundAudio();
  }
  
  // Function to stop background audio
  
  function stopBackgroundAudio() {
    if (backgroundAudio) {
        backgroundAudio.pause();
    }
  }
  