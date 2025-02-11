// scripts.js
// Add any necessary JavaScript here

// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Example: Form validation (if you add a form later)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Please fill out all required fields.");
      }
    });
  }
});
