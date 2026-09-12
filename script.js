// Smooth scrolling for navigation links

document.querySelectorAll('nav a, .logo, footer a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        if (!href || !href.startsWith('#')) {
            return;
        }

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Contact form response

const form = document.querySelector("form");
const responseMessage = document.getElementById("form-response");

if (form && responseMessage) {

    form.addEventListener("submit", () => {

        responseMessage.textContent =
            "Thanks for reaching out! Your message is being sent.";

    });

}
