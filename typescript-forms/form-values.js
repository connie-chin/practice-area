'use strict';
const $contactForm = document.getElementById('contact-form');
if (!$contactForm) throw new Error('This $contactForm query failed');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); //prevent the browser from automatically reloading the page with the form's values in the URL
  const $formElements = $contactForm.elements;
  const values = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('values:', values);
  $contactForm.reset();
});
