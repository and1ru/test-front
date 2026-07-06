import { expect, it, describe } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useIncrementar } from "./useIncrementar";

describe("se probara un customHook", () => {
    it("espera que el primer valor sea 0 y despues incremente a 1", () => {

        // renderHook -> permite testear todo lo que retorna el hook, ya sean valores o otras funciones
        // result devuelve un result.current y de ahi ya puede acceder a todos lo valores que retornar el custom hook
        const {result} = renderHook(() => useIncrementar())

        // dice que espera que el valor inicial del count sea 0
        expect(result.current.count).toBe(0)

        // act -> espera a que React termine de aplicar los cambios de estado
        // y los renderizados antes de seguir con el test.
        act(() => {
            result.current.incrementar()
        })

        // dice que espera que haya incrementado a 1
        expect(result.current.count).toBe(1)
    })
})