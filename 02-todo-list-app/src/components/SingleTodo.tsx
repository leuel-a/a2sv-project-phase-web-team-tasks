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
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return { ...todo };
        }));
    };

    const handleDelete = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <form className="todos__single">
            { todo.isDone ? (
                <s className="todos__single--text">{ todo.todo }</s>
            ) : (
                <span className="todos__single--text">{ todo.todo }</span>
            )}
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete onClick={() => handleDelete(todo.id)} />
                </span>
                <span className="icon">
                    <MdDone onClick={() => handleDone(todo.id)} />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;
