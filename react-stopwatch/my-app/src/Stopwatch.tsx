import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [activeInterval, setActiveInterval] = useState<NodeJS.Timeout>(); // if we are playing, there will be an active interval
  const playIcon = <FaPlay />;
  const pauseIcon = <FaPause />;

  function increaseElapsedTime(): void {
    setElapsedTime((prev) => prev + 1);
  }

  function handleIconClick() {
    if (activeInterval === undefined) {
      // timer paused
      const intervalId = setInterval(increaseElapsedTime, 1000);
      setActiveInterval(intervalId); // setting the current state of where its at, live time
    } else if (activeInterval !== undefined) {
      // timer playing
      clearInterval(activeInterval);
      setActiveInterval(undefined); // live time its pausing
    }
  }

  function handleFaceClick() {
    if (activeInterval) return; // if theres an active interval, meaning timer is going, it does nothing
    setElapsedTime(0); // if active interval is undefined, meaning timer is paused, it resets elapsed time to 0
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div onClick={handleFaceClick} className="watch-face">
            <div className="elapsed-time">{elapsedTime}</div>
          </div>
          <div onClick={handleIconClick} className="icon">
            {activeInterval ? pauseIcon : playIcon}
          </div>
        </div>
      </div>
    </>
  );
}
