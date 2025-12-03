/*
 JavaScript for Contact Form Validation 
 Coded by Cal Noonan
*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Contact_Form");

    // Form submission event listener
    form.addEventListener("submit", function (event) {
        const firstName = document.querySelector('input[name="First_name"]').value.trim();
        const lastName = document.querySelector('input[name="Last_name"]').value.trim();
        const email = document.querySelector('input[name="Email"]').value.trim();
        const phone = document.querySelector('input[name="Phone_Number"]').value.trim();
        const reason = document.querySelector('select[name="reason_for_contact"]').value;
        const message = document.querySelector('textarea[name="Message"]').value.trim();

        // Validate first and last name
        if (firstName === "" || lastName === "") {
            alert("Please enter your first and last name.");
            event.preventDefault();
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Validate phone number (digits only, 7-15 characters)
        const phonePattern = /^[0-9]{7,15}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (digits only, 7–15 characters).");
            event.preventDefault();
            return;
        }

        //validate reason for contact
        if (reason === "") {
            alert("Please select a reason for contact.");
            event.preventDefault();
            return;
        }

        // Validate message length
        if (message.length < 10) {
            alert("Your message should be at least 10 characters long.");
            event.preventDefault();
            return;
        }

        alert("Form submitted successfully!");
        form.reset(); // Clears the form
    });
});
