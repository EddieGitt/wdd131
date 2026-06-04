// Footer: current copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Footer: last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

hamburger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  hamburger.innerHTML = isOpen ? "&#10005;" : "&#9776;";
  hamburger.setAttribute("aria-expanded", String(isOpen));
});