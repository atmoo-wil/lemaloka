// toggle active class
const namaMenu = document.querySelector(".namaMenu");

// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  namaMenu.classList.toggle("active");
};

// ketika di luar sidebar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !namaMenu.contains(e.target)) {
    namaMenu.classList.remove("active");
  }
});
