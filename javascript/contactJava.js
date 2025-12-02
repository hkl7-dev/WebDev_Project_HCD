
document.getElementById('contactForm').addEventListener('submit', function(e)
{
  e.preventDefault(); // Stop actual form submission for now
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  // Hide popup after 3 seconds and then submit the form
  setTimeout(() => {
    popup.style.display = 'none';
    this.submit(); // Optional: actually submit the form after showing popup
  }, 3000);
});
