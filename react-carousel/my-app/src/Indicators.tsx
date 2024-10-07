import { FaRegCircle, FaCircle } from 'react-icons/fa';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
  onSelect: (index: number) => void;
  current: number;
};

export function Indicators({ images, onSelect, current }: Props) {
  return (
    <>
      {images.map((image, index) => (
        <div className="dots" onClick={() => onSelect(index)} key={image.alt}>
          {current === index ? <FaCircle /> : <FaRegCircle />}
        </div>
      ))}
    </>
  );
}
