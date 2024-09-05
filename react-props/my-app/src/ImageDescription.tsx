type Props = {
  imageDescription: string;
};

export function ImageDescription({ imageDescription }: Props) {
  return (
    <div>
      <p>{imageDescription}</p>
    </div>
  );
}
