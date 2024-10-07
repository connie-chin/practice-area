import './App.css';
import { RotatingCarousel } from './RotatingCarousel';

function App() {
  const images = [
    {
      src: '/images/IMG_blueShirtFront.JPG',
      alt: 'Bear Blue Shirt Front',
    },
    {
      src: '/images/IMG_blueShirtBack.JPG',
      alt: 'Bear Blue Shirt Back',
    },
    {
      src: '/images/IMG_starShirtFront.JPG',
      alt: 'Blue Star Shirt Front',
    },
    {
      src: '/images/IMG_starShirtBack.JPG',
      alt: 'Blue Star Shirt Back',
    },
    {
      src: '/images/IMG_seahorseShirtFront.JPG',
      alt: 'Yellow Seahorse Shirt Front',
    },
    {
      src: '/images/IMG_seahorseShirtBack.JPG',
      alt: 'Yellow Seahorse Shirt Back',
    },
    {
      src: '/images/IMG_uclaShirtFront.JPG',
      alt: 'White UCLA Shirt Front',
    },
    {
      src: '/images/IMG_uclaShirtBack.JPG',
      alt: 'White UCLA Shirt Back',
    },
  ];
  return (
    <>
      <RotatingCarousel images={images} />
    </>
  );
}

export default App;
