import { useState } from 'react';
type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  function handleClick() {
    if (descriptionIndex >= imageDescrip.length - 1) {
      setDescriptionIndex(0);
    } else {
      setDescriptionIndex(descriptionIndex + 1);
    }
  }

  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[descriptionIndex]}</p>
    </div>
  );
}
