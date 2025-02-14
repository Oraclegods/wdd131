document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic Year in Footer
    const yearSpan = document.querySelector(".current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
