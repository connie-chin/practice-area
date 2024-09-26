import { FaMagnifyingGlass } from 'react-icons/fa6';

type Props = {
  userInput: string;
  onSearchBarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ userInput, onSearchBarChange }: Props) {
  return (
    <div className="inputBox">
      <FaMagnifyingGlass className="icon" />
      <input
        value={userInput}
        type="text"
        name="userInput"
        placeholder="Search"
        onChange={onSearchBarChange}></input>
    </div>
  );
}
