import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevClick(): void {
    const previousIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(previousIndex);
  }

  function handleNextClick(): void {
    const nextIndex = (currentIndex + 1) % items.length; // if on 5, now 6%6 gives us 0, so it goes back to front of array
    setCurrentIndex(nextIndex);
  }

  function handleSelect(index: number): void {
    // here parent is passing event handler to child
    setCurrentIndex(index);
  }
  return (
    <div className="wrapper">
      <Banner item={items[currentIndex]} />
      <PrevButton onClick={handlePrevClick} />
      <div>
        <Indicators
          items={items}
          current={currentIndex}
          onSelect={handleSelect}
        />
      </div>
      <div>
        <NextButton onClick={handleNextClick} />
      </div>
    </div>
  );
}
