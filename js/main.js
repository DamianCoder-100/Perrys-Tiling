

function openLightbox(img) {
  document.getElementById("lightboxImage").src = img.src;

  const title = img.getAttribute("data-title");
  document.getElementById("lightboxTitle").textContent = title;
}


// // CONTACT FORM VALIDATION
// ===== ELEMENTS =====
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const service = document.getElementById('service');
const message = document.getElementById('message');

const popup = document.getElementById('successPopup');
const closeBtn = document.getElementById('closePopup');

// ===== VALIDATE FUNCTIONS =====
function validate(input) {
    if (!input.checkValidity()) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
}

function validatePhone(input) {
    const phonePattern = /^[0-9+\s()-]{7,15}$/;
    if (!phonePattern.test(input.value.trim())) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
}

function validateSelect(select) {
    if (!select.value) {
        select.classList.add('is-invalid');
        select.classList.remove('is-valid');
        return false;
    } else {
        select.classList.remove('is-invalid');
        select.classList.add('is-valid');
        return true;
    }
}

// ===== LIVE VALIDATION =====
[nameInput, email, message].forEach(input => {
    input.addEventListener('input', () => validate(input));
});

phone.addEventListener('input', () => validatePhone(phone));
service.addEventListener('change', () => validateSelect(service));

// ===== FORM SUBMIT =====
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isNameValid = validate(nameInput);
    const isEmailValid = validate(email);
    const isPhoneValid = validatePhone(phone);
    const isServiceValid = validateSelect(service);
    const isMessageValid = validate(message);
    
    if (isNameValid && isEmailValid && isPhoneValid && isServiceValid && isMessageValid) {
        // Send to backend here with fetch()
        console.log('Form valid. Submitting...');
        
        showPopup();
        form.reset();
        clearValidation();
    }
});

// ===== CLEANUP =====
function clearValidation() {
    document.querySelectorAll('.is-invalid, .is-valid').forEach(el => {
        el.classList.remove('is-invalid', 'is-valid');
    });
}

// ===== POPUP CONTROLS =====
function showPopup() {
    popup.classList.remove('hidden');
    closeBtn.focus();
}

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
        popup.classList.add('hidden');
    }
});