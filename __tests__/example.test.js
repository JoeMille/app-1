// example test 

function sum(a, b) {
    return a + b;
  }
  
  test('sum function adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
  });
  
  // test for timer function 

  const {
    startTimer,
    stopTimer,
    updateTimerDisplay,
    showMessage,
  } = require('../assets/js/script'); 
  
  describe('Meditation Timer', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
  
    afterEach(() => {
      jest.clearAllTimers();
    });
  
    test('Timer starts and updates correctly', () => {
      startTimer(1); // Start timer for 1 minute
  
      jest.advanceTimersByTime(30000);
      expect(updateTimerDisplay).toHaveBeenCalledTimes(1);
  
      expect(document.getElementById('minutes').textContent).toBe('00');
      expect(document.getElementById('seconds').textContent).toBe('30');
  
      jest.advanceTimersByTime(30000);
      expect(updateTimerDisplay).toHaveBeenCalledTimes(2);
  
      expect(document.getElementById('minutes').textContent).toBe('00');
      expect(document.getElementById('seconds').textContent).toBe('00');
  
      
      expect(showMessage).toHaveBeenCalledWith(messages[0]);
    });
  
    test('Timer stops correctly', () => {
      startTimer(1); 
      stopTimer(); 
  
      
      expect(clearInterval).toHaveBeenCalled();
    });
  
    test('Message updates every 20 seconds', () => {
      startTimer(1); 
  
     
      jest.advanceTimersByTime(20000);
  
      expect(showMessage).toHaveBeenCalledWith(messages[1]);
  
      jest.advanceTimersByTime(20000);
  
    
      expect(showMessage).toHaveBeenCalledWith(messages[2]);
    });
  });
  
  // test for map function

  
const { initMap } = require('./script');

// Mock the google maps function
global.google = {
  maps: {
    Map: jest.fn(() => ({}))
  }
};

describe('Google Maps Initialization', () => {
  beforeEach(() => {
    // Create a mock element for document.getElementById
    document.body.innerHTML = '<div id="map"></div>';
  });

  test('initMap should create a Google Map with correct options', () => {
    // Call the function to be tested
    initMap();

    // Expect google.maps.Map to have been called with the correct options
    expect(google.maps.Map).toHaveBeenCalledWith(
      document.getElementById("map"),
      {
        center: { lat: 40.700802, lng: 73.987602 },
        zoom: 10
      }
    );
  });
});
