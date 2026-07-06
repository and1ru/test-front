export const Formulario = () => {
  return (
    <form>
        <label htmlFor="email">Correo</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">iniciar sesion</button>
    </form>
  );
};
