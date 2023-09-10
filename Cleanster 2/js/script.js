
  // -------Contact form delay after finish------------------\\

 document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    const successMessage = document.querySelector(".success-message");

    sendButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission

      // Simulate a successful send action (replace this with actual sending logic)
      showSuccessMessage();
    });

    function showSuccessMessage() {
      successMessage.style.display = "block";

      // Clear form inputs after a delay
      setTimeout(() => {
        successMessage.style.display = "none";
        clearFormInputs();
      }, 2000);
    }

    function clearFormInputs() {
      const inputs = document.querySelectorAll(".email_text");
      const textarea = document.querySelector(".massage_text");

      inputs.forEach(input => (input.value = ""));
      textarea.value = "";
    }
  });



  // -------When we click Become a provider------Thank you------------\\

  function openPopup() {
    document.getElementById("popupOverlay").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function() {
    const becomeProviderLink = document.querySelector(".become-provider-link");
    const popupCloseButton = document.getElementById("popupCloseButton");

    if (becomeProviderLink) {
      becomeProviderLink.addEventListener("click", openPopup);
    }

    if (popupCloseButton) {
      popupCloseButton.addEventListener("click", closePopup);
    }
  });

  // sign in & sign up

const signinForm = document.getElementById('form-signin');
const signupForm = document.getElementById('form-signup');
const signinTab = document.getElementById('signin-tab');
const signupTab = document.getElementById('signup-tab');
const switchToSignin = document.getElementById('switch-to-signin');
const switchToSignup = document.getElementById('switch-to-signup');

signinTab.addEventListener('click', () => {
  signinForm.style.display = 'block';
  signupForm.style.display = 'none';
  signinTab.classList.add('active');
  signupTab.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signinForm.style.display = 'none';
  signupForm.style.display = 'block';
  signupTab.classList.add('active');
  signinTab.classList.remove('active');
});

switchToSignin.addEventListener('click', (event) => {
  event.preventDefault();
  signinForm.style.display = 'block';
  signupForm.style.display = 'none';
  signinTab.classList.add('active');
  signupTab.classList.remove('active');
});

switchToSignup.addEventListener('click', (event) => {
  event.preventDefault();
  signinForm.style.display = 'none';
  signupForm.style.display = 'block';
  signupTab.classList.add('active');
  signinTab.classList.remove('active');
});
