interface ButtonProps {
  handleClick:() => void
}

export const Button = ({handleClick}:ButtonProps) => {
  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export const Input = () => {
  return(
    <>
      <input type="text" placeholder="escribe tu nombre" />
      <input type="email" placeholder="escribe tu email" defaultValue="andres@gmail.com" />
    </>
  )
}