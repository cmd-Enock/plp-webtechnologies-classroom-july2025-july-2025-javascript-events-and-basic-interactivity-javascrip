
const helloBtn = document.getElementById("helloBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click", () => {
  message.textContent = "Heloo!!! You Clicked Me😘🎉";
});



// 1. Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById("toggleMode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let counterValue = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  counterValue++;
  counterDisplay.textContent = counterValue;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  counterValue--;
  counterDisplay.textContent = counterValue;
});

// 3. Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});


const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    formMessage.textContent = "❌ All fields are required!";
    formMessage.className = "error";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "❌ Invalid email format!";
    formMessage.className = "error";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "❌ Password must be at least 6 characters!";
    formMessage.className = "error";
    return;
  }

  formMessage.textContent = "✅ Registration successful!";
  formMessage.className = "success";
});


const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active state from all
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active state to clicked button and matching content
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// Set default active tab
tabButtons[0].classList.add("active");
tabContents[0].classList.add("active");
