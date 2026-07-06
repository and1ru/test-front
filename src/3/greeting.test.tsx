import { screen, render } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { Greeting } from "./greeting";

describe("", () => {
    it("deberia mostrar un mensaje tipo 'hola andres'", () => {
        // para probar las props simplemente se le pasan cuando se renderiza el componenteññ
        render(<Greeting name="andres"/>)
        const saludo = screen.getByRole("heading", {name:"Hola, andres"})

        expect(saludo).toBeInTheDocument()
    })
})