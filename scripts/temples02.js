// temples02.js

// Array of Temple Objects
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
  // Three additional temple objects added:
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8458-thumb.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-876543-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-654321-wallpaper.jpg"
  }
];

/**
 * Renders temple cards based on the passed array.
 */
function displayTemples(filteredTemples) {
  const templeGrid = document.querySelector(".temple-grid");
  templeGrid.innerHTML = ""; // Clear previous content

  filteredTemples.forEach((temple) => {
    // Create a <figure> element to hold the temple card
    const templeCard = document.createElement("figure");
    templeCard.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
      </figcaption>
    `;
    templeGrid.appendChild(templeCard);
  });
}

/**
 * Initializes the page after DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Display all temples initially
  displayTemples(temples);

  // Listen for clicks on the navigation menu to filter temples
  document.querySelector("nav ul").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const filter = event.target.textContent;
      let filteredTemples = temples;

      switch (filter) {
        case "Old":
          // Temples built before 1900
          filteredTemples = temples.filter(t =>
            parseInt(t.dedicated.split(", ")[0]) < 1900
          );
          break;
        case "New":
          // Temples built after 2000
          filteredTemples = temples.filter(t =>
            parseInt(t.dedicated.split(", ")[0]) > 2000
          );
          break;
        case "Large":
          // Temples larger than 90,000 square feet
          filteredTemples = temples.filter(t => t.area > 90000);
          break;
        case "Small":
          // Temples smaller than 10,000 square feet
          filteredTemples = temples.filter(t => t.area < 10000);
          break;
        default:
          // "Home" or any other case: show all temples
          filteredTemples = temples;
      }

      displayTemples(filteredTemples);
    }
  });

  // Update the footer with the last modified date of the document
  document.getElementById("lastModified").textContent = document.lastModified;
});
