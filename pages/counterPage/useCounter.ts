import { useState } from "react";







interface CounterProps {
    count: number,
    increment: () => void,
    decrement: () => void,
}
const useCounter = (): CounterProps => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return {
        count,
        increment,
        decrement,
    }
}

export default useCounter;