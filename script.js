

document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();


    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
});


});


const form = document.querySelector("form");
const responseMessage = document.getElementById("form-response");

if (form && responseMessage) {
form.addEventListener("submit", () => {
responseMessage.textContent =
"Thank you for reaching out! Your message has been sent.";
responseMessage.style.color = "#38bdf8";
});
}
