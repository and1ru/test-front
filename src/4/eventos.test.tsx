import { expect, it, describe, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, Input } from "./eventos";

describe("en este test se probaran los eventos", () => {
    it("deberia de llamar a la funcion despues de hacer un click", async () => {
        // se mockea una funcion -> no hace nada solo simula un comportamiento
        const handleClick = vi.fn()
        render(<Button handleClick={handleClick}/>)

        const button = screen.getByRole("button", {name:"click"})

        // userEvent -> simula el comportamiento de un usuario haciendo eventos como: un click, escribir en un input, mandar un formulario
        // tiene que usar await porque es algo que se tarda
        await userEvent.click(button)

        // toHaveBeenCalled() -> verifica que se haya llamado a la funcion
        expect(handleClick).toHaveBeenCalled()
    })

    it("deberia de escribir 'andres'", async () => {
        render(<Input/>)

        // getByPlaceholderText() -> sirve para obtener un input 
        const inputName = screen.getByPlaceholderText("escribe tu nombre")
        const inputEmail = screen.getByPlaceholderText("escribe tu email")

        // type() -> dice en que input va a escribir y que va a escribir
        // no pone el texto de repente como si lo hubiera pegado
        // lo hace letra por letra simulando un usuario real
        await userEvent.type(inputName, "andres")

        // de esta manera se limpia lo que tiene un input
        await userEvent.clear(inputEmail);

        // toHaveValue() -> dice que espera que algo tenga ese valor
        expect(inputName).toHaveValue("andres")
        
        expect(inputEmail).toHaveValue("")
    })
})