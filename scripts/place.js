// =====================
// Footer: current year
// =====================
document.getElementById("currentyear").textContent = new Date().getFullYear();

// =====================
// Footer: last modified
// =====================
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// =====================
// Wind Chill Calculation
// Uses metric formula (°C, km/h)
// Conditions: temp <= 10°C AND wind > 4.8 km/h
// =====================

const temperature = 30;   // °C  — match your displayed static value
const windSpeed = 12;     // km/h — match your displayed static value

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

const windchillEl = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windchillEl.textContent = calculateWindChill(temperature, windSpeed) + "°C";
} else {
  windchillEl.textContent = "N/A";
}