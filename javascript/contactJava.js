
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Get the form by ID
    const form = document.getElementById("Contact_Form");

    form.addEventListener("submit", function (event) {
        // Get values from form fields
        const firstName = document.querySelector('input[name="First name"]').value.trim();
        const lastName = document.querySelector('input[name="Last name"]').value.trim();
        const email = document.querySelector('input[name="Email"]').value.trim();
        const phone = document.querySelector('input[name="Phone Number"]').value.trim();
        const reason = document.querySelector('select[name="reason for contact"]').value;
        const message = document.querySelector('textarea[name="Message"]').value.trim();

        // Validate First and Last Name
        if (firstName === "" || lastName === "") {
            alert("Please enter your first and last name.");
            event.preventDefault();
            return;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Validate Phone Number (digits only, 7–15 characters)
        const phonePattern = /^[0-9]{7,15}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (digits only, 7–15 characters).");
            event.preventDefault();
            return;
        }

        // Validate Reason
        if (reason === "") {
            alert("Please select a reason for contact.");
            event.preventDefault();
            return;
        }

        // Validate Message
        if (message.length < 10) {
            alert("Your message should be at least 10 characters long.");
            event.preventDefault();
            return;
        }

        // If all checks pass
        alert("Form submitted successfully!");

        
        // If all checks pass
        alert("Form submitted successfully!");
        form.reset(); // Clears all input fields

    });
});


