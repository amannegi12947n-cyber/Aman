const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const dropdown = document.querySelector(".dropdown > a");
const menu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});
