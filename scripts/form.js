// ── Footer ──
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// ── Product Array ──
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "ps-2000", name: "Power Laces" },
  { id: "tg-2345", name: "Time Circuits" },
  { id: "cj-0987", name: "Compact Hover Skater" },
  { id: "jh-3000", name: "Plutonium Chamber" }
];

// ── Dynamically populate the select element ──
const select = document.getElementById("product-name");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});