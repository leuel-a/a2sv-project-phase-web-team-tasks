import React from 'react';
import { Task } from "../models/models";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    const handleDelete =  (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const handleDone = (id: number) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    return (
        <div className="row">
            { tasks.map((task) => {
                return (
                    <div key={task.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="card mt-3">
                            <div className="card-body">
                                {
                                    task.completed ? (
                                        <h5 className="card-title text-decoration-line-through">{task.description}</h5>
                                    ) : (
                                        <h5 className="card-title">{task.description}</h5>
                                    )
                                }
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={() => handleDone(task.id)} >
                                        { task.completed ? 'Undo' : 'Done' }
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
