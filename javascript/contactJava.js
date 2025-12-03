
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Contact_Form");

    form.addEventListener("submit", function (event) {
        const firstName = document.querySelector('input[name="First_name"]').value.trim();
        const lastName = document.querySelector('input[name="Last_name"]').value.trim();
        const email = document.querySelector('input[name="Email"]').value.trim();
        const phone = document.querySelector('input[name="Phone_Number"]').value.trim();
        const reason = document.querySelector('select[name="reason_for_contact"]').value;
        const message = document.querySelector('textarea[name="Message"]').value.trim();

        if (firstName === "" || lastName === "") {
            alert("Please enter your first and last name.");
            event.preventDefault();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        const phonePattern = /^[0-9]{7,15}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (digits only, 7–15 characters).");
            event.preventDefault();
            return;
        }

        if (reason === "") {
            alert("Please select a reason for contact.");
            event.preventDefault();
            return;
        }

        if (message.length < 10) {
            alert("Your message should be at least 10 characters long.");
            event.preventDefault();
            return;
        }

        alert("Form submitted successfully!");
        form.reset(); // Clears the form
    });
});
