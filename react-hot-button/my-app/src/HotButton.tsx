import { useState } from 'react';

export function HotButton() {
  const [clickCount, setClickCount] = useState(0);
  function handleClick() {
    setClickCount((prevCount) => prevCount + 1);
  }

  function getClassName() {
    if (clickCount < 3) return '';
    else if (clickCount < 6) return 'darkPurple';
    else if (clickCount < 9) return 'lightPurple';
    else if (clickCount < 12) return 'salmon';
    else if (clickCount < 15) return 'sand';
    else if (clickCount < 18) return 'yellow';
    return 'white';
  }
  // const buttonClass = getClassName();

  return (
    <button className={getClassName()} onClick={handleClick}>
      Click me: {clickCount}
    </button>
  );
}
