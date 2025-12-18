function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user !== "" && pass !== "") {
    localStorage.setItem("login", "true");
    window.location.href = "home.html";
  } else {
    alert("Username dan Password harus diisi!");
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}
