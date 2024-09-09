type Pet = {
  name: string;
  age: string;
};

type Props = {
  valsPets: Pet[];
};

export function ValsPets({ valsPets }: Props) {
  return (
    <ul>
      {valsPets.map((pet) => (
        <li key={pet.age}>
          {pet.name} {pet.age}
        </li>
      ))}
    </ul>
  );
}
