import { screen, render } from "@testing-library/react";
import { expect, it, describe,vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Buttons } from "./buttons";

describe("se estan testeando los buttons", () => {
    it("se prueba el button con la funcion mockeada", async () => {
        const funcion = vi.fn()
        render(<Buttons handleClick={funcion}/>)

        const button = screen.getByRole("button",{name:"primero"})

        await userEvent.click(button)

        // espera que se haya llamado la funcion
        expect(funcion).toHaveBeenCalled()
        // dice cuantas veces se espera que se haya llamado la funcion
        expect(funcion).toHaveBeenCalledTimes(1)
    })
})