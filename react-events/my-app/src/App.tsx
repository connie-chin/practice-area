import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];

// const imageInfo = [ //way to group info together
//   {
//     imageSrc: '/starry-sky.jpeg',
//   imageCap: 'A Beautiful Image of Space',
//   imageDescrip: 'This is a wonderful sky full of stars!'
// },
//   {
//     imageSrc: '/cool-kitty.jpg',
//   imageCap: 'A Cool Cat',
//   imageDescrip: 'This is a picture of a very cool cat!'
// },
//   {
//     imageSrc: '/cool-car.jpg',
//   imageCap: 'A Cool Car',
//   imageDescrip: 'This is a picture of a very cool car!'
// },
// ]
const buttonText = 'Click for Next Image';

export function App() {
  const [imageIndex, setImageIndex] = useState(0);
  function handleClick() {
    if (imageIndex >= imageSrc.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc[imageIndex]} />
      <ImageCaption imageCap={imageCap[imageIndex]} />
      <ImageDescription imageDescrip={imageDescrip[imageIndex]} />
      <ButtonContainer buttonText={buttonText} onImageClick={handleClick} />
    </>
  );
}
