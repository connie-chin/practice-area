type Props = {
  imageCaption: string;
};

export function ImageCaption({ imageCaption }: Props) {
  return (
    <div>
      <h3>{imageCaption}</h3>
    </div>
  );
}
