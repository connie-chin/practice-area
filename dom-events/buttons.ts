const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('The $clickButton query failed');

const handleClick: any = (event: Event): void => {
  console.log('button clicked');
  console.log('event:', event); // object of the event
  console.log('event.target:', event.target); // where the event happened.
};

// function handleClick (event: Event) {
//   console.log('button clicked');
//   console.log('event:', event);
//   console.log('event.target:', event.target);
// }

$clickButton.addEventListener('click', handleClick); // its listening for a click

const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('The $hoverButton query failed');

const handleMouseOver: any = (event: Event): void => {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
};

$hoverButton.addEventListener('mouseover', handleMouseOver); // its listening for a mouseover

const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('The $doubleClickButton query failed');

const handleDoubleClick: any = (event: Event): void => {
  console.log('button double clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
};
$doubleClickButton.addEventListener('dblclick', handleDoubleClick); // its listening for a double click
