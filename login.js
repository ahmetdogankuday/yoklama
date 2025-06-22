// login.js

function showLogin() {
  const loginPopup = document.getElementById("loginPopup");
  if (loginPopup) loginPopup.style.display = "block";
}

function checkLogin(successRedirectUrl = "liste.html") {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const validLogins = [
    { username: "ahmet.kuday", password: "Bezmialem1845" },
    { username: "mihri", password: "mihri53" }
  ];

  const isValid = validLogins.some(user => user.username === username && user.password === password);

  if (isValid) {
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("fromForm", "true");
    window.location.href = successRedirectUrl;
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}

function resetLogin() {
  const loginPopup = document.getElementById("loginPopup");
  if (loginPopup) loginPopup.style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function enforceAuthentication(redirectUrl = "form.html") {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";
  const fromForm = localStorage.getItem("fromForm") === "true";
  if (!isAuthenticated || !fromForm) {
    alert("Bu sayfayı görüntülemek için giriş yapmalısınız.");
    window.location.href = redirectUrl;
  }
}