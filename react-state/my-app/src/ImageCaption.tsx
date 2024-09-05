import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [captionIndex, setCaptionIndex] = useState(0);

  function handleClick() {
    if (captionIndex >= imageCap.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleClick}>{imageCap[captionIndex]}</h3>
    </div>
  );
}
