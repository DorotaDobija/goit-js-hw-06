const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please complete all fields!");
  }
  console.log(`{email: ${email.value},
password: ${password.value}}`);
  e.currentTarget.reset();
});
