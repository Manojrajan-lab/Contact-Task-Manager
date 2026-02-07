
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "👁";
  }
});

const lengthRule = document.getElementById("lengthRule");
const specialRule = document.getElementById("specialRule");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  if (password.length >= 8) {
    lengthRule.classList.add("valid");
    lengthRule.textContent = "✅ Minimum 8 characters";
  } else {
    lengthRule.classList.remove("valid");
    lengthRule.textContent = "❌ Minimum 8 characters";
  }

  const specialPattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (specialPattern.test(password)) {
    specialRule.classList.add("valid");
    specialRule.textContent = "✅ At least 1 special character";
  } else {
    specialRule.classList.remove("valid");
    specialRule.textContent = "❌ At least 1 special character";
  }
});

const form = document.getElementById("contactForm");
const error = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const specialPattern = /[!@#$%^&*(),.?":{}|<>]/;

  if (!name || !email || !message) {
    error.textContent = "All fields are required.";
    return;
  }

  if (!emailPattern.test(email)) {
    error.textContent = "Invalid email format.";
    return;
  }

  if (
    passwordInput.value.length < 8 ||
    !specialPattern.test(passwordInput.value)
  ) {
    error.textContent = "Password does not meet requirements.";
    return;
  }

  error.textContent = "";
  alert("Form submitted successfully!");
  form.reset();
});

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.addEventListener("click", () => li.remove());

  taskList.appendChild(li);
  taskInput.value = "";
});
