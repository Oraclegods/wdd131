// JavaScript for dynamically populating product options and tracking review count

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    // Populate the product select dropdown
    const productSelect = document.getElementById("product-name");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Review counter using localStorage
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        document.getElementById("review-counter").textContent = `Total Reviews Submitted: ${reviewCount}`;
    }
});
