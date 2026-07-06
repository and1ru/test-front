interface Props {
    name:string;
}

export const Greeting = ({name}:Props) => {
  return (
    <h1>Hola, {name}</h1>
  );
};
