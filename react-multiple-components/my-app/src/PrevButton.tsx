type Props = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="buttons">
      Prev
    </button>
  );
}
