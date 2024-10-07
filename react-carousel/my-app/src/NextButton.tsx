import { GrCaretNext } from 'react-icons/gr';

type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return <GrCaretNext className="button" onClick={onClick}></GrCaretNext>;
}
