//LOADING SCREEN
document.addEventListener("DOMContentLoaded", function () {
  const loaderWrapper = document.querySelector(".loader_wrapper");
  const body = document.body;

  // Add fade-out effect after 3 seconds
  setTimeout(() => {
      loaderWrapper.classList.add("fade-out");
      body.classList.remove("preload"); // Enable scrolling after loader fades out
  }, 4000);
});





//AUDIO SHIT THAT WASNT USED
function isAudioPlaying(audioElement) {
  return !audioElement.paused && !audioElement.ended && audioElement.readyState > 2;
}

// Monitor the audio and replay it if it's not playing
function monitorAudioPlayback() {
  const audio = document.querySelector('.greg');
  if (audio) {
      setInterval(() => {
          if (!isAudioPlaying(audio)) {
              console.log('Audio stopped, replaying...');
              audio.play().catch((error) => {
                  console.error('Error replaying audio:', error);
              });
          }
      }, 1000); // Check every second
  } else {
      console.error('Audio element with class "greg" not found.');
  }
}

// Call the monitor function after the DOM has loaded
document.addEventListener('DOMContentLoaded', monitorAudioPlayback);





//SIGN UP THIGGY (old)
/*
document.addEventListener('DOMContentLoaded', function () {

  // Get the sign-up button and input fields
  const signupButton = document.getElementById('signup-btn');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Add event listener for the "SIGN UP" button
  signupButton.addEventListener('click', function () {
    // Check if all fields are filled
    if (usernameInput.value && emailInput.value && passwordInput.value) {
      // Show success message
      alert("Sign in successful, try and log in");

      // Clear the input fields after successful signup
      usernameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
    } else {
      // Show error if any field is empty
      alert("Please fill all the fields");
    }
  });
});

*/

//INDEX HOME SCREEN BACKGROUND TRANSITION THINGGY
document.addEventListener('DOMContentLoaded', function () {
  let images = ['./images/bg3.jpg', './images/bg10.jpg']; // List of images to loop through
  let currentIndex = 0; // Start with the first image
  let firstCycleCompleted = false; // Flag to track if the first 1-second cycle is completed
  document.querySelector('.main').style.transition = "background 3s ease-in-out"; 
  // Set the initial background image immediately when the page loads
  document.querySelector('.main').style.backgroundImage = `url(${images[currentIndex]})`;

  // Function to change background image
  function changeBackgroundImage() {
      currentIndex = (currentIndex + 1) % images.length; // Cycle through the images

      // Apply the transition before changing the background image
      document.querySelector('.main').style.transition = "background 3s ease-in-out"; 

      // Change the background image after the transition is applied
      document.querySelector('.main').style.backgroundImage = `url(${images[currentIndex]})`;

      // After the first cycle, set the flag to true to use a 5-second interval
      if (!firstCycleCompleted) {
          firstCycleCompleted = true; // Mark the first cycle as completed
      }
  }

  // Start the interval to change the background images
  let intervalTime = 1000; // Start with 1 second

  let intervalId = setInterval(function () {
      changeBackgroundImage();

      // After the first cycle (1 second), change the interval to 5 seconds
      if (firstCycleCompleted) {
          clearInterval(intervalId); // Clear the previous interval
          intervalId = setInterval(changeBackgroundImage, 10000); // Set a 5-second interval
      }
  }, intervalTime); // Start with 1 second
});


//BUY POP UP
document.addEventListener('DOMContentLoaded', () => {
const boxElements = document.querySelectorAll('.box'); // Select all elements with class 'box'
const popup = document.getElementById('customPopup');
const closeButton = document.getElementById('closePopup');

// Loop through all box elements and add a click event listener to each
boxElements.forEach((boxElement) => {
    boxElement.addEventListener('click', () => {
        popup.style.display = 'block'; // Show the custom popup
        popup.classList.remove('hide'); // Trigger the fade-in animation
    });
});

// Close the popup when the close button is clicked
closeButton.addEventListener('click', () => {
    popup.classList.add('hide'); // Trigger the fade-out animation
    setTimeout(() => {
        popup.style.display = 'none'; // Hide the custom popup after the animation completes
    }, 200); // Match the animation duration
});
});


//LOGIN BUTTON
document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.login-btn');
  const popup = document.getElementById('LoginPop');
  const closeButton = document.getElementById('closePopup');
  const emailInput = document.getElementById('name');
  const passwordInput = document.getElementById('password');

  // Add an event listener to respond to the login button click
  loginButton.addEventListener('click', () => {
    // Check if both fields are empty
    if (emailInput.value !== "" && passwordInput.value !== "") {
      // Show the custom popup
      popup.style.display = 'block';
      // Clear the input fields
      emailInput.value = '';
      passwordInput.value = '';
    }
  });

  // Close the popup when the button is clicked
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the custom popup
  });
});





//----------------------------------------------------------------------------------------------------------
//WEBSITE RESIZE THING IDK
function adjustMainHeight() {
  const mainElement = document.querySelector('.main');
  const viewportHeight = window.innerHeight;
  const contentHeight = document.documentElement.scrollHeight;

  // Ensure main always fills viewport or content
  mainElement.style.height = `${Math.max(viewportHeight, contentHeight)}px`;
}

// Adjust height on zoom and resize
window.addEventListener('resize', adjustMainHeight);
window.addEventListener('load', adjustMainHeight);



function adjustMainHeight2() {
  const mainElement = document.querySelector('.mainL');
  const viewportHeight = window.innerHeight;
  const contentHeight = document.documentElement.scrollHeight;

  // Ensure main always fills viewport or content
  mainElement.style.height = `${Math.max(viewportHeight, contentHeight)}px`;
}

// Adjust height on zoom and resize
window.addEventListener('resize', adjustMainHeight2);
window.addEventListener('load', adjustMainHeight2);




// IF I REMOVE THIS RANDOM CODE IT WILL BUG THE LOAYOUT ZOOM OUT IN BUY MENU IDK WHY.. BETTER NOT TOUCH IT
window.addEventListener('resize', adjustMainHeight3);
window.addEventListener('load', adjustMainHeight3);





function adjustMainHeight5() {
  const mainElement = document.querySelector('.main5');
  const viewportHeight = window.innerHeight;
  const contentHeight = document.documentElement.scrollHeight;

  // Ensure main always fills viewport or content
  mainElement.style.height = `${Math.max(viewportHeight, contentHeight)}px`;
}

// Adjust height on zoom and resize
window.addEventListener('resize', adjustMainHeight5);
window.addEventListener('load', adjustMainHeight5);



function adjustMainHeight4() {
  const mainElement = document.querySelector('.main4');
  const viewportHeight = window.innerHeight;
  const contentHeight = document.documentElement.scrollHeight;

  // Ensure main always fills viewport or content
  mainElement.style.height = `${Math.max(viewportHeight, contentHeight)}px`;
}

// Adjust height on zoom and resize
window.addEventListener('resize', adjustMainHeight4);
window.addEventListener('load', adjustMainHeight4);
//----------------------------------------------------------------------------------------------------------



