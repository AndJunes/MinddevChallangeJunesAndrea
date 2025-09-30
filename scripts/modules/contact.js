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
        errorName.textContent = "Por favor ingresa tu nombre.";
        errorName.classList.add("show");
        valid = false;
    }

    if (!email) {
        errorEmail.textContent = "Por favor ingresa tu email.";
        errorEmail.classList.add("show");
        valid = false;
    } else if (!validateEmail(email)) {
        errorEmail.textContent = "Por favor ingresa un email válido.";
        errorEmail.classList.add("show");
        valid = false;
    }

    if (!message) {
        errorMessage.textContent = "Por favor ingresa un mensaje.";
        errorMessage.classList.add("show");
        valid = false;
    }

    if (!valid) return;

    // Mostrar mensaje de éxito
    contactSuccess.style.display = "block";

    // Mostrar los datos ingresados
    contactPreview.innerHTML = `
        <h4>Datos Enviados:</h4>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
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