
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.Contact_form form');

  form.addEventListener('submit', function (e) {
    // Get field values
    const firstName = form.querySelector('input[name="First name"]').value.trim();
    const lastName = form.querySelector('input[name="Last name"]').value.trim();
    const email = form.querySelector('input[name="Email"]').value.trim();
    const phone = form.querySelector('input[name="Phone Number"]').value.trim();
    const message = form.querySelector('textarea[name="Message"]').value.trim();

    // Basic checks
    if (!firstName || !lastName || !email || !phone || !message) {
      alert('Please fill in all fields.');
      e.preventDefault();
      return;
    }

    // Simple email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return;
    }

    // Optional: simple phone check (digits only)
    if (!/^\+?\d{7,}$/.test(phone)) {
      alert('Please enter a valid phone number.');
      e.preventDefault();
      return;
    }

    // Optional: message length check
    if (message.length < 10) {
      alert('Message should be at least 10 characters.');
      e.preventDefault();
    }
  });
});
