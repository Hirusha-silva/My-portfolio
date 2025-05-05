
    document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing page

    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
}

    if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
}

    // Simulate form submission
    alert("Thank you for your message!\n\nWe will get back to you soon.");
    document.getElementById("contactForm").reset();
});

    function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

