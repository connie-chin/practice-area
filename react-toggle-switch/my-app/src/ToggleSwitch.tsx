import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);
  return (
    <>
      <div className="toggle-container">
        <div
          onClick={() => setIsOn((prevState) => !prevState)}
          className={isOn ? 'toggle-slider-on' : 'toggle-slider-off'}>
          <div className="toggle-switch"></div>
        </div>
        <span className="toggle-label">{isOn ? 'ON' : 'OFF'}</span>
      </div>
    </>
  );
}
