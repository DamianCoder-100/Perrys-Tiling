
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


const hero = document.querySelector(".hero");

const images = [
  "pictures/3d-rendering-modern-black-bathroom-with-luxury-tile-decor.jpg",
  "pictures/kitchen6.png",
  "pictures/tile-stairs.png"
];

let index = 0;

function changeImage() {
  hero.style.backgroundImage = `url(${images[index]})`;

  // zoom in
  hero.style.transform = "scale(1.08)";

  setTimeout(() => {
    hero.style.transform = "scale(1)";
  }, 2500);

  index = (index + 1) % images.length;
}

// first image
changeImage();

// match shadow timing (5s)
setInterval(changeImage, 5000);


// Fade IN on page load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


function openLightbox(img) {
  document.getElementById("lightboxImage").src = img.src;

  const title = img.getAttribute("data-title");
  document.getElementById("lightboxTitle").textContent = title;
}


// CONTACT FORM VALIDATION
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const service = document.getElementById("service");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];

    // -------------------
    // NAME validation
    // -------------------
    if (name.value.trim().length < 2) {
      errors.push("Name must be at least 2 characters");
    }

    // -------------------
    // EMAIL validation
    // -------------------
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      errors.push("Enter a valid email address");
    }

    // -------------------
    // PHONE validation (STRICT numbers only OR formatted allowed)
    // -------------------
 const phoneValue = phone.value.trim();

// STRICT: digits only, 7–15 numbers
const phonePattern = /^[0-9]{7,15}$/;

if (!phonePattern.test(phoneValue)) {
  errors.push("Enter a valid phone number (digits only, 7–15 numbers)");
}

    // -------------------
    // SERVICE validation
    // -------------------
    if (!service.value) {
      errors.push("Please select a service");
    }

    // -------------------
    // MESSAGE validation
    // -------------------
    if (message.value.trim().length < 5) {
      errors.push("Message must be at least 5 characters");
    }

    // -------------------
    // RESULT HANDLING
    // -------------------
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    // RESET FORM
    form.reset();

    // SHOW BOOTSTRAP MODAL
    const modal = new bootstrap.Modal(document.getElementById("successModal"));
    modal.show();
  });
});




