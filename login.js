// Giriş popup'ını göster
function showLogin() {
  const popup = document.getElementById("loginPopup");
  if (popup) popup.style.display = "block";
}

// Giriş popup'ını kapat
function resetLogin() {
  const popup = document.getElementById("loginPopup");
  if (popup) popup.style.display = "none";
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  if (usernameInput) usernameInput.value = "";
  if (passwordInput) passwordInput.value = "";
}

// Giriş kontrolü
function checkLogin() {
  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  const validLogins = [
    { username: "ahmet.kuday", password: "Bezmialem1845" },
    { username: "mihri", password: "mihri53" }
  ];

  const isValid = validLogins.some(user => user.username === username && user.password === password);

  if (isValid) {
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("fromLogin", "true"); // ✅ fromForm yerine fromLogin
    window.location.href = "liste.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}

// Liste sayfasında koruma
function enforceAuthentication() {
  const isAuthenticated = localStorage.getItem("authenticated");
  const fromLogin = localStorage.getItem("fromLogin");

  if (!isAuthenticated || fromLogin !== "true") {
    alert("Bu sayfayı görüntülemek için giriş yapmalısınız.");
    window.location.href = "form.html";
  } else {
    localStorage.removeItem("fromLogin"); // ✅ temizleme
  }
}
