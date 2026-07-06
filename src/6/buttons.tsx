interface Props {
    handleClick:() => void
}

export const Buttons = ({handleClick}:Props) => {
    function onClick() {}

  return (
    <>
        <button onClick={handleClick}>primero</button>
        <button onClick={onClick}>segundo</button>
    </>
  );
};


export const Button = () => {
    function handleClick() {}
    return(
    <>
        <button onClick={handleClick}></button>
    </>
    )
}