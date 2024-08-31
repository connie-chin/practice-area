import { List } from './List';
import './App.css'

function App() {
    const fruits = [
    {id:1, name:'Apples', calories:5},
  {id:2, name:'Oranges', calories:10},
  {id:3, name:'Bananas', calories:15},
  {id:4, name:'Blueberries', calories:20},
  {id:5, name:'Pineapple', calories:25}
];

  const vegetables = [
    {id:6, name: 'Brocolli', calories:30},
    {id:7, name: 'Cauliflower', calories:35},
    {id:8, name: 'Kale', calories:40},
    {id:9, name: 'Brussel Sprouts', calories:45},
    {id:10, name: 'Beets', calories:50}
  ]

  const protein = [
    {id:11, name: 'Chicken', calories:55},
    {id:12, name: 'Beef', calories:60},
    {id:13, name: 'Pork', calories:65},
    {id:14, name: 'Beans', calories:70},
    {id:15, name: 'Fish', calories:75}
  ]

  return (
    <>
    <List items={fruits} category='Fruits'></List>
    <List items={vegetables} category='Vegetables'></List>
    <List items={protein} category='Protein'></List>
    </>
  )
}

export default App
