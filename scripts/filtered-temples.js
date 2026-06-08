// ── Footer ──
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// ── Hamburger ──
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

hamburger.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  hamburger.innerHTML = isOpen ? "&#10005;" : "&#9776;";
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

// ── Temple Data Array ──
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "London England",
    location: "Lingfield, Surrey, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  }
];

// ── Build a single temple card ──
function createTempleCard(temple) {
  const card = document.createElement("div");
  card.classList.add("card");

  const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);

  card.innerHTML = `
    <img
      src="${temple.imageUrl}"
      alt="${temple.templeName} Temple"
      loading="lazy"
      width="400"
      height="250">
    <div class="card-body">
      <h2>${temple.templeName}</h2>
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${temple.dedicated}</p>
      <p><span>Area:</span> ${temple.area.toLocaleString()} sq ft</p>
    </div>
  `;

  return card;
}

// ── Render filtered array into gallery ──
function renderTemples(filter) {
  const gallery = document.getElementById("gallery");
  const heading = document.getElementById("gallery-heading");
  gallery.innerHTML = "";

  // Update active nav link
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.dataset.filter === filter);
  });

  // Filter logic
  let filtered;
  switch (filter) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      heading.textContent = "Old Temples";
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      heading.textContent = "New Temples";
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      heading.textContent = "Large Temples";
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      heading.textContent = "Small Temples";
      break;
    default:
      filtered = temples;
      heading.textContent = "Home";
  }

  if (filtered.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("no-results");
    msg.textContent = "No temples match this filter.";
    gallery.appendChild(msg);
    return;
  }

  filtered.forEach(temple => {
    gallery.appendChild(createTempleCard(temple));
  });
}

// ── Nav click listeners ──
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    renderTemples(link.dataset.filter);

    // Close hamburger menu on mobile after selecting
    mainNav.classList.remove("open");
    hamburger.innerHTML = "&#9776;";
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// ── Initial render on page load ──
renderTemples("home");