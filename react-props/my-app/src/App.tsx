import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = '/starry-sky.jpeg';
const imageCaption = 'A beautiful Image of Space';
const imageDescription =
  'Lorem ipsum, dolor sit amet consectetur blah blah blah blah more lorem ipsum';
const buttonText = 'Click For Next Image';

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCaption={imageCaption} />
      <ImageDescription imageDescription={imageDescription} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
