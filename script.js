const dropdown = document.querySelector(".dropdown > a");
const menu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});
