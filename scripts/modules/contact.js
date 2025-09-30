const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");
const contactPreview = document.getElementById("contactPreview");

// Span de errores
const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = document.getElementById("errorMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Limpiar errores
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";
    errorName.classList.remove("show");
    errorEmail.classList.remove("show");
    errorMessage.classList.remove("show");

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    let valid = true;

    if (!name) {
        errorName.textContent = "Please enter your name.";
        errorName.classList.add("show");
        valid = false;
    }

    if (!email) {
        errorEmail.textContent = "Please enter your email.";
        errorEmail.classList.add("show");
        valid = false;
    } else if (!validateEmail(email)) {
        errorEmail.textContent = "Please enter a valid email.";
        errorEmail.classList.add("show");
        valid = false;
    }

    if (!message) {
        errorMessage.textContent = "Please enter a message.";
        errorMessage.classList.add("show");
        valid = false;
    }

    if (!valid) return;

    // Mostrar mensaje de éxito
    contactSuccess.style.display = "block";

    // Mostrar los datos ingresados
    contactPreview.innerHTML = `
        <h4>Data Submitted:</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    contactPreview.classList.add("show");

    // Limpiar formulario después de 3 segundos
    setTimeout(() => {
        contactForm.reset();
        contactSuccess.style.display = "none";
        contactPreview.classList.remove("show");
    }, 3000);
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
