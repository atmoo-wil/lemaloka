// toggle active class
const namaMenu = document.querySelector(".namaMenu");

// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  namaMenu.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// ketika di luar sidebar
const menu = document.querySelector("#menu");
const sb = document.querySelector("#search");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !namaMenu.contains(e.target)) {
    namaMenu.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyCcqulszlWLVLo5RusL3LBDA5A1Rx4tvSL-4hoZZ-pkBXM8KrWxztvud6sAZ0DjpTYbA/exec";
const form = document.forms["lemaloka-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".alert-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // ketika klik kirim
//   // tampilkan tombol loading & hilangkan tombol kirim
//   btnKirim.classList.toggle("btn-loading");
//   btnLoading.classList.toggle("btn-loading");
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       btnKirim.classList.toggle("btn-loading");
//       btnLoading.classList.toggle("btn-loading");
//       alert.classList.toggle("alert-none");
//       form.reset();
//       console.log("Success!", response);
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

// document.querySelector(".closebtn").onclick = () => {
//   alert.classList.toggle("alert-none");
// };
