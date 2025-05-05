emailjs.init("5-TgpCFxtQzSI64H0 ");
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_qjvnxjg", "template_mqee8us", this)
        .then(() => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        }, (error) => {
            console.error("Failed to send message:", error);
            alert("Oops! Something went wrong. Please try again.");
        });
});