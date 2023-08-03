import React from "react";
import { Todo } from "../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) => {
        todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return { ...todo };
        });
    };
    return (
        <form className="todos__single">
            <span className="todos__single--text">
                { todo.todo }
            </span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <MdDone onClick={() => handleDone(todo.id)} />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;
