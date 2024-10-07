import { GrCaretPrevious } from 'react-icons/gr';

type Props = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Props) {
  return (
    <GrCaretPrevious className="button" onClick={onClick}></GrCaretPrevious>
  );
}
