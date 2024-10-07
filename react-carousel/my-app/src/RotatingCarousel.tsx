import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { useState, useEffect } from 'react';
import { CarouselImage } from './CarouselImage';
import { Indicators } from './Indicators';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function RotatingCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevClick(): void {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(previousIndex);
  }

  function handleNextClick(): void {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }

  function handleSelect(index: number): void {
    // here parent is passing event handler to child
    setCurrentIndex(index);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [handleNextClick]);

  return (
    <>
      <div className="firstLevel">
        <PrevButton onClick={handlePrevClick} />
        <CarouselImage image={images[currentIndex].src} />
        <NextButton onClick={handleNextClick} />
      </div>
      <div className="secondLevel">
        <Indicators
          images={images}
          onSelect={handleSelect}
          current={currentIndex}
        />
      </div>
    </>
  );
}
