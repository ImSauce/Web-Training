document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.login-btn');
  const popup = document.getElementById('LoginPop');
  const closeButton = document.getElementById('closePopup');
  const emailInput = document.getElementById('name');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // Add an event listener to respond to the login button click
  loginButton.addEventListener('click', () => {
    // Check if all fields are filled
    if (emailInput.value !== "" && passwordInput.value !== "" && usernameInput.value !== "") {
      // Show the custom popup
      popup.style.display = 'block';
      
      // Clear the input fields
      emailInput.value = '';
      passwordInput.value = '';
      usernameInput.value = '';
    }
  });

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    // Add a fade-out effect before hiding the popup
    popup.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    // After the fade-out animation completes, set display to none
    setTimeout(() => {
      popup.style.display = 'none';
      popup.style.animation = ''; // Reset animation for next use
    }, 500); // Duration matches the fade-out animation
  });
});





function adjustMainHeight3() {
  const mainElement = document.querySelector('.mainS');
  const viewportHeight = window.innerHeight;
  const contentHeight = document.documentElement.scrollHeight;

  // Ensure main always fills viewport or content
  mainElement.style.height = `${Math.max(viewportHeight, contentHeight)}px`;
}

// Adjust height on zoom and resize
window.addEventListener('resize', adjustMainHeight3);
window.addEventListener('load', adjustMainHeight3);


