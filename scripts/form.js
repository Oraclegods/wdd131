document.addEventListener("DOMContentLoaded", function () {
    // Product array
    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    // Populate product dropdown
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Fixing the star rating issue
    const ratingInputs = document.querySelectorAll(".rating input");
    ratingInputs.forEach(input => {
        input.addEventListener("change", function () {
            // Remove filled effect from all labels
            document.querySelectorAll(".rating label").forEach(label => {
                label.classList.remove("selected");
            });

            // Add selected effect only to checked star
            this.nextElementSibling.classList.add("selected");
        });
    });

    // Update last modified date in footer
    document.getElementById("last-modified").textContent = document.lastModified;

    // Review counter using localStorage
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        document.body.insertAdjacentHTML("beforeend", `<p>Reviews submitted: ${reviewCount}</p>`);
    }
});
