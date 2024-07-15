const $countDown = document.querySelector('.countdown-display');
if (!$countDown) throw new Error('This $countDown query failed');

let i = 4; // initializes
$countDown.textContent = `${i}`; // initial countdown display
const intervalId = setInterval(() => {
  i--;
  if (i > 0)
    $countDown.textContent = `${i}`; // why does a for loop not work here?
  else {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId); // stops the interval after countdown completes. setInterval would keep updating without this
  }
}, 1000);
