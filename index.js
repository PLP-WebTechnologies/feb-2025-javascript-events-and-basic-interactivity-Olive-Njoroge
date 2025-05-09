// Dark/Light Mode Toggle
function ChangeMode() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        btn.innerHTML = "Light ☀";
    } else {
        btn.innerHTML = "Dark🌙";
    }
}

let btn = document.querySelector(".mode");
btn.addEventListener("click", ChangeMode);

// Header styling
let heading = document.querySelector("h1");
heading.style.background = "lightblue";
heading.classList.add("pulse");

// Remove/Replace Paragraph
function RemoveMe() {
    let paragraph = document.querySelector("header p");
    if (paragraph) {
        paragraph.remove(); 
    }

    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Enjoy our freshly brewed coffee! ☕";
    let header = document.querySelector("header");
    header.appendChild(newParagraph);
}

let remove = document.querySelector(".remove");
remove.addEventListener("click", RemoveMe);

// Hover Effects on Coffee Images
const coffeeImages = document.querySelectorAll('.coffeeImages figure');
coffeeImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Keypress Detection
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        alert('You pressed the Escape key! Going back to safety...');
    }
});

// Double-click Secret Action
const header = document.querySelector('header');
header.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'purple';
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 1000);
});

// Image Slideshow
let currentImageIndex = 0;
const images = document.querySelectorAll('.coffeeImages figure');

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'block';
            img.querySelector('img').style.width = '300px';
            img.querySelector('img').style.height = '300px';
        } else {
            img.style.display = 'none';
        }
    });
}

const slideshowContainer = document.querySelector('.slideshow-container');
const prevButton = document.createElement('button');
prevButton.textContent = '◀ Previous';
const nextButton = document.createElement('button');
nextButton.textContent = 'Next ▶';

slideshowContainer.prepend(prevButton);
slideshowContainer.append(nextButton);

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Initialize slideshow
showImage(currentImageIndex);

// Form Validation
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validationForm(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let nameFeedback = document.querySelector("#nameFeedback");

    let email = document.querySelector("#email").value;
    let emailFeedback = document.querySelector("#emailFeedback");

    let password = document.querySelector("#password").value;
    let passwordFeedback = document.querySelector("#passwordFeedback");

    if (name.length < 3) {
        nameFeedback.textContent = 'Name must be at least 3 characters';
        nameFeedback.style.color = "red";
    } else {
        nameFeedback.textContent = 'Looks Good';
        nameFeedback.style.color = "green";
    }

    if (!validateEmail(email)) {
        emailFeedback.textContent = 'Invalid email format';
        emailFeedback.style.color = "red";
    } else {
        emailFeedback.textContent = 'Looks Good';
        emailFeedback.style.color = "green";
    }

    if (password.length < 8) {
        passwordFeedback.textContent = 'Password must be at least 8 characters.';
        passwordFeedback.style.color = "red";
    } else {
        passwordFeedback.textContent = 'Looks Good';
        passwordFeedback.style.color = "green";
    }

    if (name.length >= 3 && validateEmail(email) && password.length >= 8) {
        alert('Form submitted successfully! Thank you for your feedback.');
        document.querySelector("#feedbackForm").reset();
        nameFeedback.textContent = '';
        emailFeedback.textContent = '';
        passwordFeedback.textContent = '';
    }
}

// Real-time validation
document.querySelector("#name").addEventListener("input", (e) => {
    const name = e.target.value;
    const nameFeedback = document.querySelector("#nameFeedback");
    
    if (!name) {
        nameFeedback.textContent = '';
    } else if (name.length < 3) {
        nameFeedback.textContent = 'Name must be at least 3 characters';
        nameFeedback.style.color = "red";
    } else {
        nameFeedback.textContent = 'Looks Good';
        nameFeedback.style.color = "green";
    }
});

document.querySelector("#email").addEventListener("input", (e) => {
    const email = e.target.value;
    const emailFeedback = document.querySelector("#emailFeedback");
    
    if (!email) {
        emailFeedback.textContent = '';
    } else if (!validateEmail(email)) {
        emailFeedback.textContent = 'Invalid email format';
        emailFeedback.style.color = "red";
    } else {
        emailFeedback.textContent = 'Looks Good';
        emailFeedback.style.color = "green";
    }
});

document.querySelector("#password").addEventListener("input", (e) => {
    const password = e.target.value;
    const passwordFeedback = document.querySelector("#passwordFeedback");
    
    if (!password) {
        passwordFeedback.textContent = '';
    } else if (password.length < 8) {
        passwordFeedback.textContent = 'Password must be at least 8 characters';
        passwordFeedback.style.color = "red";
    } else {
        passwordFeedback.textContent = 'Looks Good';
        passwordFeedback.style.color = "green";
    }
});

// Password requirements display
const passwordInput = document.querySelector("#password");
passwordInput.addEventListener('focus', () => {
    const requirements = document.createElement('div');
    requirements.innerHTML = `
        <p style="font-size: 0.8em; color: gray;">Password requirements:</p>
        <ul style="font-size: 0.8em; color: gray; margin-top: -10px;">
            <li>At least 8 characters</li>
        </ul>
    `;
    passwordInput.parentNode.insertBefore(requirements, passwordInput.nextSibling);
    
    passwordInput.addEventListener('blur', () => {
        requirements.remove();
    }, { once: true });
});

// Handle form submission
let submit = document.querySelector("#Submit");
submit.addEventListener("click", validationForm);