document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("5-TgpCFxtQzSI64H0");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_qjvnxjg", "template_mqee8us", this)
            .then(function () {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            }, function (error) {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please try again.");
            });
    });
});
