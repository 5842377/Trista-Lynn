document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                formMessage.textContent = "Please fill in all fields.";
                formMessage.style.color = "black";
                return;
            }

            if (!email.includes("@")) {
                formMessage.textContent = "Please enter a valid email.";
                return;
            }

            formMessage.textContent = "Thank you! Your message has been sent.";
            form.reset();
        });
    }

    const toggleButton = document.getElementById("darkModeToggle");

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            toggleButton.textContent =
                document.body.classList.contains("dark-mode")
                    ? "☀️ Light Mode"
                    : "🌙 Dark Mode";
        });
    }
});