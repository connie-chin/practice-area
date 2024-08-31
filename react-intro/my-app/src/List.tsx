export function List (props:any) {

  const itemList = props.items;
  const category = props.category;




// fruits.sort((a,b) => a.name.localeCompare(b.name)); //makes the list alphabetical
// fruits.sort((a,b) => b.name.localeCompare(a.name)); //makes list reverse alphabetical
// fruits.sort((a,b) => a.calories - b.calories); //numeric order of calories
// fruits.sort((a,b) => b.calories - a.calories); //reverse numeric order of calories
// const lowCalFruits = fruits.filter(fruit => fruit.calories <15); //filter method

  const listItems = itemList.map(item => <li key={item.id}>
                                              {item.name}: &nbsp;<b>{item.calories}</b>
                                              </li>);
  return (<>
  <h3 className="list-category">{category}</h3>
  <ol className="list-items">{listItems}</ol>
  </>
  );
}
