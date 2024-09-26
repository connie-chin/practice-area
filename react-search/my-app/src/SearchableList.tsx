import { SearchBar } from './SearchBar';
import { Items } from './Items';
import { ChangeEvent, useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [userInput, setUserInput] = useState('');
  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(userInput.toLowerCase()),
  );

  return (
    <>
      <SearchBar
        userInput={userInput}
        onSearchBarChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUserInput(e.target.value)
        }
      />
      <Items quotes={filteredQuotes} />
    </>
  );
}
