// import { useContext } from "react"
// import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface TodoProps {
    todo: Todo
}


export const TodoItem = ({ todo }: TodoProps) => {

    //const { toggleTodo } = useContext(TodoContext)
    const { toggleTodo } = useTodos();

    return (
        <li
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            onDoubleClick={() => toggleTodo(todo.id)}>
            {todo.description}
        </li>
    )
}
