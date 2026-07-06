import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Formulario } from "./form";

describe("login", () => {
    it("", async () => {
        render(<Formulario/>)

        // getByLabelText() -> se usa para obtener el input por el label
        const inputEmail = screen.getByLabelText("email")
        const inputPassword = screen.getByLabelText("password")
        const button = screen.getByRole("button",{name:"iniciar sesion"})

        await userEvent.type(inputEmail,"andres@gmail.com")
        await userEvent.type(inputPassword, "123456789")
        await userEvent.click(button)

    })
})