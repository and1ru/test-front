import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { Queries } from "./Queries";

describe("renderizado con diferentes queries", () => {
    it("deberia renderizar un botton", () => {
        render(<Queries/>)

        // getByRole() -> permite obtener un elemento por el rol que cumple, ya se un boton, input, h1
        // button -> button
        // textBox -> input
        // link -> para enlaces
        // img -> para imagenes
        // list -> para listas
        // listItem -> para elementos de lista
        // heading -> para titulos
        // name -> dice que es lo que dice dentro del elemento
        // getBy... -> si no encuentra el elemento lanza un error inmediatamente
        const button = screen.getByRole("button", {name:"enviar"})
        expect(button).toBeInTheDocument()
    })

    it("deberia no renderizar un mensaje de error", () => {
        render(<Queries/>)

        // queryBy... -> se usa para cuando se quiere verificar que no hay algo en el componente
        const button = screen.queryByText("error")
        // dice que espera que no este en el documento
        expect(button).not.toBeInTheDocument()
    })

    it("deberia aparecer mas tarde", async () => {
        render(<Queries/>)
        // findBy... -> sirve para los elementos que no aparecen de inmediato
        // por ejemplo: despues de una peticion http, de un setTimeOut, 
        // tiene que usar await; espera un momento para fallar
        const titulo = await screen.findByText("titulo")

        expect(titulo).toBeInTheDocument()
    })

    it("deberia de obtener los elementos de la lista", () => {
        render(<Queries/>)

        // getAllBy... -> sirve para seleccionar varios elementos
        const listItems = screen.getAllByRole("listitem")

        // toHaveLength -> dice cuantos elementos se espera haber obtenido
        expect(listItems).toHaveLength(3)
    })
})