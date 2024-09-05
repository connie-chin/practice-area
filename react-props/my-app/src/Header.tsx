type Props = {
  headerText: string; //property thats on the props object
};

export function Header({ headerText }: Props) {
  //here we are deconstructing from headerText property from props object
  return <h1>{headerText}</h1>;
}
