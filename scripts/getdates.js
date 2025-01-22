// getdates.js
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    // Set the current year dynamically
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set the last modified date dynamically
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
});
