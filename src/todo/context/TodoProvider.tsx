import { useReducer } from "react";
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from "./TodoContext"
import { TodoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '1',
            description: 'Recolectar las piedras del infinito',
            completed: false,

        },
        {
            id: '2',
            description: 'Piedra del alma',
            completed: false,
        }
    ],
    completed: 0,
    pending: 2,
}

interface TodoProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProviderProps) => {


    const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
