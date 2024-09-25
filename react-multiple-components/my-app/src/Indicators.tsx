type Props = {
  items: string[];
  current: number;
  onSelect: (index: number) => void; // child registers event listener on itself, calls the event handler that was handed to it
};

export function Indicators({ items, current, onSelect }: Props) {
  console.log(current);
  return (
    <>
      {items.map((item, index) => (
        <button
          key={item}
          onClick={() => onSelect(index)} // onClick, calls an arrow function that calls onSelect, and maintains the index value. its a child passing the index number up to the parent, so it knows which word to show? data is bubbling up to its parents. this is a listener, its assigning the event handler that was passed to it here
          className={current === index ? 'highlight' : ''}>
          {index}
        </button>
      ))}
    </>
  );
}
