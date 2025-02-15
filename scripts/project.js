// Wait for the DOM to fully load before executing JS 
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // ========== 1. Toggle Mobile Navigation ==========
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰ Menu";
    navToggle.classList.add("nav-toggle");
    navToggle.setAttribute("type", "button"); // Prevent form submission
    document.querySelector("header .container").prepend(navToggle);

    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // ========== 2. Display a Fun Fact on Button Click ==========
    const funFacts = [
        "Nigeria has the largest economy in Africa.",
        "Lagos is Africa’s most populous city.",
        "Nigeria is home to over 250 ethnic groups.",
        "The Nigerian film industry (Nollywood) is the second largest in the world."
    ];

    const exploreBtn = document.querySelector(".explore-btn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
            alert(`🌍 Fun Fact: ${randomFact}`);
        });
    }

    // ========== 3. Save & Retrieve User Email (localStorage) ==========
    const emailInput = document.querySelector("input[type='email']");
    const subscribeButton = document.querySelector(".subscribe-btn"); // Corrected selector

    if (subscribeButton) {
        subscribeButton.addEventListener("click", () => {
            const email = emailInput.value.trim();
            if (email && email.includes("@")) {
                localStorage.setItem("subscribedEmail", email);
                alert("📩 Subscription Successful! Thank you.");
                emailInput.value = ""; // Clear input field
            } else {
                alert("⚠️ Please enter a valid email address.");
            }
        });
    }

    // ========== 4. Object & Array Interaction ==========
    const nigeriaInfo = {
        country: "Nigeria",
        population: "220 million",
        capital: "Abuja",
        language: "English",
        currency: "Naira (₦)",
        displayInfo() {
            return `📍 ${this.country} - Capital: ${this.capital}, Population: ${this.population}`;
        }
    };

    console.log(nigeriaInfo.displayInfo());

    // ========== 5. Conditional Highlight for Economy Section ==========
    const economySection = document.querySelector(".info-box:nth-child(2)");
    if (economySection) {
        economySection.style.border = "3px solid green"; // Highlight Economy Box
    }
});
