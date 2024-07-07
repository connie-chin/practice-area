interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.getElementById('contact-form') as HTMLFormElement;
if (!$contactForm) throw new Error('This $contactForm query failed');

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // prevent the browser from automatically reloading the page with the form's values in the URL
  const $formElements = $contactForm.elements as FormElements;
  const values = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('values:', values);
  $contactForm.reset();
});
