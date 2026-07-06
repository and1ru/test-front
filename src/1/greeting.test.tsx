import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Greeting } from "./greeting";

// describe agrupa el test
describe("saludo", () => {
    // it es un caso que se va a testear
    it("deberia mostrar el saludo", () => {
        // render se encarga de renderizar el componente
        render(<Greeting/>)

        // screen.getByText() -> se encarga de buscar en la pantalla donde diga lo que hay en parentesis
        const saludo = screen.getByText("hola")
        // expect -> se le pasa lo que se va a testear y dice que espera que pase
        // toBeInTheDocument -> dice que espera que algo este en la pantalla
        expect(saludo).toBeInTheDocument()
    })
})

// para ejecutar el test usar el comando "bun run test" en la consola