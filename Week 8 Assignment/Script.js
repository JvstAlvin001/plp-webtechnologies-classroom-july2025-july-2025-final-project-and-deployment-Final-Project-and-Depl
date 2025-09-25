// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "⚠️ Please fill in all fields.";
    formMessage.style.color = "red";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    formMessage.textContent = "⚠️ Please enter a valid email.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
  }
});
