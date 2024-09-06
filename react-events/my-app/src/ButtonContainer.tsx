type Props = {
  buttonText: string;
  onImageClick: () => void;
};

export function ButtonContainer({ buttonText, onImageClick }: Props) {
  return (
    <div>
      <button onClick={onImageClick}>{buttonText}</button>
    </div>
  );
}
//where the onClick is actually being assigned and used. on parent its just being passed down
