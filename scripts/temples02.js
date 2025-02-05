document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("nav ul li a");
    const templeContainer = document.getElementById("templeContainer");

    function filterTemples(criteria) {
        templeContainer.innerHTML = "";
        let filteredTemples = temples;
        
        if (criteria === "Old") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (criteria === "New") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (criteria === "Large") {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if (criteria === "Small") {
            filteredTemples = temples.filter(t => t.area < 10000);
        }
        
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("temple-card");
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
            `;
            templeContainer.appendChild(templeCard);
        });
    }
    
    filterButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            filterTemples(event.target.textContent);
        });
    });
});
