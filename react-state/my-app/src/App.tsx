import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/HelloKitty.png', '/StarryNight.jpeg'];
const imageCap = [
  'A Beautiful Image of Space',
  'Hello Kitty being cute',
  'Starry Night by van gogh',
];
const imageDescrip = [
  'A beautiful real starry sky',
  'Hello Kitty being a scrumptious little cartoon cat',
  'A starry night but pain version',
];
const buttonText = 'Click for Next Image';

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
