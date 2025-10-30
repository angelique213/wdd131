// form-demo.js

function validateForm(event) {
    // reference to the form
    const theForm = event.target;
  
    // store errors
    const errors = [];
    let isValid = true;
  
// add validations
if (theForm.paymentMethod.value === "creditCard") {
  const cardNumber = theForm.creditCardNumber.value.trim();
  // check that it has exactly 16 digits
  if (theForm.creditCardNumber.value !== "1234123412341234") {
    isValid = false;
    errors.push("Invalid Credit Card Number");
  }
}

// check that the name field is not empty
if (theForm.fullName.value !== "Bob") {
  isValid = false;
  errors.push("Your name is not Bob");
}

  
    // if invalid, stop and show errors
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  function togglePaymentDetails() {
    const theForm = document.querySelector("#checkoutForm");
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
  
    // Hide both containers
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
  
    // Disable required on hidden fields
    theForm.creditCardNumber.required = false;
    theForm.paypalUsername.required = false;
  
    // Show correct section
    if (theForm.paymentMethod.value === "creditCard") {
      creditCardContainer.classList.remove("hide");
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === "paypal") {
      paypalContainer.classList.remove("hide");
      theForm.paypalUsername.required = true;
    }
  }
  
  // helper to show error messages
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
  // attach event listeners
  document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);
  document.querySelector("#checkoutForm").addEventListener("submit", validateForm);
  