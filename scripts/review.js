// ── Footer ──
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// ── localStorage review counter ──
// Retrieve existing count, default to 0 if not set
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment by 1 each time this confirmation page loads
reviewCount += 1;

// Save updated count back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display the count on the page
document.getElementById("review-count").textContent = reviewCount;