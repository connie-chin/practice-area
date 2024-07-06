const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal || !$dismissModal || !$dialog)
  throw new Error('This $openModal, $dismissModal, or $dialog query failed');

$openModal.addEventListener('click', (): void => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', (): void => {
  $dialog.close();
});
