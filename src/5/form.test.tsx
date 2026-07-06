import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Formulario } from "./form";

describe("login", () => {
    it("espera que todo salga bien en el formulario", async () => {
        render(<Formulario/>)

        // getByLabelText() -> se usa para obtener el input por el label
        // obtiene por lo que tenga escrito en el label; no por el htmlFor o por el id
        const inputEmail = screen.getByLabelText("Correo")
        const inputPassword = screen.getByLabelText("Password")
        const button = screen.getByRole("button",{name:"iniciar sesion"})

        await userEvent.type(inputEmail,"andres@gmail.com")
        await userEvent.type(inputPassword, "123456789")
        await userEvent.click(button)

        expect(inputEmail).toHaveValue("andres@gmail.com")
        expect(inputPassword).toHaveValue("123456789")

        await userEvent.click(button)
    })
})