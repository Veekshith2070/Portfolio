const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navigationItems = navLinks.querySelectorAll("a");
const sections = document.querySelectorAll("section[id]");
const revealElements = document.querySelectorAll(".reveal");
const yearElement = document.getElementById("year");
const contactForm = document.querySelector(".contact-form");


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

function handleNavbarScroll() {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleNavbarScroll);

handleNavbarScroll();


/* =========================================
   MOBILE MENU
========================================= */

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


/* Close mobile menu after clicking a link */

navigationItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const navItem = document.querySelector(
            `.nav-links a[href="#${sectionId}"]`
        );

        if (!navItem) {
            return;
        }

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navigationItems.forEach((item) => {
                item.classList.remove("active");
            });

            navItem.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   FOOTER YEAR
========================================= */

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   CONTACT FORM
========================================= */

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const submitButton =
            contactForm.querySelector("button[type='submit']");

        if (submitButton) {

            submitButton.innerHTML = `
                Sending...
                <span>→</span>
            `;

        }

    });

}


/* =========================================
   ESCAPE KEY
   Close mobile menu
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        navLinks.classList.remove("open");
    }

});
