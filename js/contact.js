const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  $('#contactSuccessModal').modal('show');

  contactForm.reset();
});