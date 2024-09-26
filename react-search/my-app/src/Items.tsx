type Props = {
  quotes: string[];
};
export function Items({ quotes }: Props) {
  return (
    <ul>
      {quotes.length > 0 ? (
        quotes.map((quote, index) => <li key={index}>{quote}</li>)
      ) : (
        <p>No items found.</p>
      )}
    </ul>
  );
}
