type Props = {
  item: string;
};

export function Banner({ item }: Props) {
  return <p className="word">{item}</p>;
}
