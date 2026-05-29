// Dynamically populate the current copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;