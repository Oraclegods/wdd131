// Footer dynamic content
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav ul");
    const button = document.createElement("button");
    button.textContent = "☰";
    button.classList.add("hamburger");
    document.querySelector("header").prepend(button);

    button.addEventListener("click", () => {
        nav.classList.toggle("visible");
        button.textContent = nav.classList.contains("visible") ? "✖" : "☰";
    });
});

