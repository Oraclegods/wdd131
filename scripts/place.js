// Set current year and last modified date in the footer
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("#current-year");
  const lastModifiedElement = document.querySelector("#last-modified");

  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  if (yearElement) yearElement.textContent = currentYear;
  if (lastModifiedElement) lastModifiedElement.textContent = lastModified;

  // Calculate and display the wind chill factor
  const temperature = 8; // Static temperature in °C
  const windSpeed = 15; // Static wind speed in km/h

  const windChillElement = document.querySelector("#wind-chill");
  if (windChillElement) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill !== "N/A" ? `${windChill} °C` : "N/A";
  }
});

// Wind chill calculation function
function calculateWindChill(temp, speed) {
  // Only calculate if temperature <= 10 °C and wind speed > 4.8 km/h
  if (temp <= 10 && speed > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1); // Rounded to one decimal place
  } else {
    return "N/A";
  }
}

