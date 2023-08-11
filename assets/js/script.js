const messages = [
  "Take three deep breaths....",
  "Focus on your breathing....",
  "Begin to remove any intruding thoughts, good or bad...",
  "Embrace this tranquility....",
  "Continue to breathe deeply....",
  "Focus on the quiet....",
  "Keep your shoulders relaxed and your head high....",
  "Continue to breathe deeply, clearing any further thoughts from your mind....",
  "Bring your hands together and stretch to the sky....",
  "Lean your head back and hold your breath for five seconds....",
  "Close your eyes and imagine immersing into calm water....",
];

let timer;
let timerDuration;
let messageIndex = 0;
let backgroundAudio;

function startTimer(minutes) {
  if (timer) {
    clearInterval(timer);
  }

  timerDuration = minutes * 60;
  updateTimerDisplay();
  showMessage(messages[messageIndex]);

  // Play the background audio
  backgroundAudio = document.getElementById("background-audio");
  backgroundAudio.play();

  timer = setInterval(() => {
    timerDuration--;
    updateTimerDisplay();

    if (timerDuration === 0) {
      clearInterval(timer);
      showMessage("Meditation timer is complete!");
      // Pause the background audio when the timer completes
      backgroundAudio.pause();
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

  // Clear previous messages
  while (messagesContainer.firstChild) {
    messagesContainer.removeChild(messagesContainer.firstChild);
  }

  const messageContainer = document.createElement("div");
  messageContainer.textContent = message;
  messageContainer.className = "message";

  messagesContainer.appendChild(messageContainer);
}

function stopTimer() {
  clearInterval(timer);
  updateTimerDisplay();
}


  //--------------------------GOOGLE MAPS ON FIND US PAGE

  function initMap() {
    var mapOptions = {
      center: { lat: 50.51151297284177, lng: -3.6323162471725485 },
      zoom: 10,
    };
    
    var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    var marker = new google.maps.Marker({
      position: { lat: 50.51151297284177, lng: -3.6323162471725485 },
      map: googlemap, 
      title: "Head Set Zone", 
    });
  }
  
  
  //-------------------------------CONTACT FORM
  
  $(document).ready(function() {
    $(".contact-form-container").slideUp(0);
  
    $("#show-contact-form").click(function() {
      $(".contact-form-container").slideToggle();
    });
  });

  

  