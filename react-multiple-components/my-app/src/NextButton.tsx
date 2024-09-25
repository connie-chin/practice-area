type Props = {
  onClick: () => void;
};
export function NextButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="buttons">
      Next
    </button>
  );
}
