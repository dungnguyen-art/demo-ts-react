import { useReducer } from "react";
const initialState = {count: 0}
type CounterState = {
    count: number
}
type CounterAction = {
    type: string,
    payload: number
}

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case "increase":
            return {
                ...state, 
                count: state.count + action.payload
            }
        case "decrease": 
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleIncrease = () => {
        dispatch({
            type: 'increase',
            payload: 10
        })
    }
    const handleDecrease = () => {
        dispatch({
            type: 'decrease',
            payload: 10
        })
    }
    return (
        <>
            Count: {state.count}
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    )
}