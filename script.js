// FITUR 1: DARK MODE
const toggleBtn = document.getElementById("toggleMode");

// load dari localStorage
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("mode", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("mode", "light");
  }
});

// FITUR 2: SHOW/HIDE HOBI

const btnHobi = document.getElementById("toggleHobi");
const hobiContent = document.getElementById("hobiContent");

btnHobi.addEventListener("click", () => {
  if (hobiContent.style.display === "none") {
    hobiContent.style.display = "flex";
    btnHobi.textContent = "Sembunyikan Hobi";
  } else {
    hobiContent.style.display = "none";
    btnHobi.textContent = "Lihat Hobi";
  }
});

// FITUR 3: VALIDASI FORM

const form = document.getElementById("formKontak");
const status = document.getElementById("status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    status.textContent = "❌ Semua field wajib diisi!";
    status.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    status.textContent = "❌ Email harus mengandung @";
    status.style.color = "red";
    return;
  }

  status.textContent = "✅ Pesan berhasil dikirim!";
  status.style.color = "green";

  form.reset();
});