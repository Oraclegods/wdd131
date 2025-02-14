// Function to display an alert when clicking "Explore Now"
function exploreMore() {
    alert("Redirecting to explore Nigeria!");
}

// Subscribe form handling
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    
    if (email) {
        localStorage.setItem("subscribedEmail", email);
        alert(`Thank you for subscribing, ${email}!`);
        document.getElementById("email").value = "";
    } else {
        alert("Please enter a valid email address.");
    }
});
