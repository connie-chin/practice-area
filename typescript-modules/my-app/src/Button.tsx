export function Button() {
  const handleClick = () => console.log('ouch'); //arrow function w no parameters. just console logging
  const handleClick2 = (name: string) => console.log(`hi ${name}`);
  return (
    <>
      <button onClick={() => handleClick2('Georgie')}>Click Me 2</button>
      {/* <button onClick={handleClick2('Georgie')}>Click Me</button> //this calls function automatically. we dont want, we want ^ function called only when button clicked */}
      <button onClick={() => handleClick()}>Click Me 1</button>
    </>
  );
}
