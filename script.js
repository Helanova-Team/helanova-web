document.addEventListener("DOMContentLoaded", () => {
    // Scroll-based fade-in animation
    const fadeElements = document.querySelectorAll(".hero, .games, .about, .contact");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1,
    });

    fadeElements.forEach((el) => observer.observe(el));

    // Smooth scroll for "Explore Our Games" button
    const exploreButton = document.querySelector(".hero-content a");
    const gamesSection = document.querySelector("#games");

    exploreButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default jump
        gamesSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("sendButton").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoLink = `mailto:helanovateam@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});