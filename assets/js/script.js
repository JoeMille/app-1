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
  "Close your eyes and imagine immersing into calm water....",
  "Clarity dictates our perspective, and our perspective dictates our experience. Get more clarity in your life....",
  "The more you know who you are, and what you want, the less you let things upset you....",
  "Now is a great time to be present. Now is good, too. And now...",
  "You are exactly where you need to be....",
  "You are enough....",
  "There are no mistakes in meditation....",
  "There is no room for anger when the mind is calm....",
  "You are not your thoughts....",
  "You are not your emotions....",
  "The mind is our most precious resource, through which we experience every single moment of life....",
  "The mind is a wonderful servant, but a terrible master....",
  "The quieter you become, the more you can hear....",
  "Meditation and life are not separate....",
  "Notice what takes your attention, acknowledge it, and then let it go....",
  "The present moment is all that ever exists....",
  "You are not your past....",
  "A day thinking about what could happen, should happen, or what might have been is a day missed....",
  "The past is a memory, the future is a fantasy, and the present moment is real....",
  "The present moment is all that ever exists....",
  "Brilliant things happen in calm minds. Be calm. You're brilliant...."
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

  timer = setInterval(function() {
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
  const seconds = (timerDuration % 60);toString().padStart(2, "0");

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

// Gogle Maps API

function initMap() {
  let mapOptions = {
    center: {
      lat: 50.52082263846397,
      lng: -3.621800093889851
    },
    zoom: 10
  };

  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Add markers to the map
  let locations = [
    {
      lat: 50.52082263846397,
      lng: -3.621800093889851
    },
    {
      lat: 50.49949156451669,
      lng: -3.5785696369530315
    },
    {
      lat: 50.544380460226265,
      lng: -3.584592617073369
    }
  ];

 for (const location of locations) {
   new google.maps.Marker({
     position: location,
     map: map
   });
 }
}

// jQuery to toggle text on click

$(document).ready(function() {
  $(".text-area").click(function() {
      $(this).find("p").slideToggle();
  });
});
