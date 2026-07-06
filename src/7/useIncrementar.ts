import { useState } from "react"

export const useIncrementar = () => {
    const [count, setCount] = useState(0)

    function incrementar() {
        setCount(c => c + 1)
    }

    return {count, incrementar}
}