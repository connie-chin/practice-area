import { PokemonList } from './PokemonList';
import './App.css';
import { ValsPets } from './ValsPets';

function App() {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ];

  const valsPets = [
    { name: 'apollo', age: '3' },
    { name: 'kiko', age: '5' },
    { name: 'evie', age: '17' },
  ];

  return (
    <>
      <PokemonList pokedex={pokedex} />
      <ValsPets valsPets={valsPets} />
    </>
  );
}

export default App;
