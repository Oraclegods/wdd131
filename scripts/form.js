document.addEventListener("DOMContentLoaded", function () {
    // Product array
    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    // Required field validation (fixed incorrect syntax)
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const inputs = form.querySelectorAll("input[required], select[required]");
        let valid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
        });
        
        if (!valid) {
            event.preventDefault();
            alert("Please fill in all required fields.");
        }
    });

    // Populate product dropdown
    const productSelect = document.getElementById("product");
    if (productSelect) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Fixing the star rating issue
    const ratingInputs = document.querySelectorAll(".rating input");
    ratingInputs.forEach(input => {
        input.addEventListener("change", function () {
            document.querySelectorAll(".rating label").forEach(label => {
                label.classList.remove("selected");
            });
            this.nextElementSibling.classList.add("selected");
        });
    });

    // Update last modified date in footer
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Review counter using localStorage
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);
        document.body.insertAdjacentHTML("beforeend", `<p>Reviews submitted: ${reviewCount}</p>`);
    }
});
