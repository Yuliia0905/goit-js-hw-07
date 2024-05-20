const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };

  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(data);
    loginForm.reset();
  }
});
