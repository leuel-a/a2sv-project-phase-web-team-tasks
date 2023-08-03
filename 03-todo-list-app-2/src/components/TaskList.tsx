import React, { useState } from 'react';
import { Task } from "../models/models";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedDescription, setEditedDescription] = useState<string>('');

    const handleDelete = (id: number) => {
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

    const handleEdit = (id: number, description: string) => {
        setEditingTaskId(id);
        setEditedDescription(description);
    }

    const handleSave = (id: number) => {
        if (editedDescription.trim() !== '') {
            setTasks(tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, description: editedDescription };
                }
                return task;
            }));
            setEditingTaskId(null);
            setEditedDescription('');
        }
    }

    return (
        <div className="row">
            {tasks.map((task) => {
                const isEditing = task.id === editingTaskId;
                return (
                    <div key={task.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="card mt-3">
                            <div className="card-body">
                                {
                                    isEditing ? (
                                        <input
                                            type="text"
                                            value={editedDescription}
                                            onChange={(e) => setEditedDescription(e.target.value)}
                                        />
                                    ) : (
                                        task.completed ? (
                                            <h5 className="card-title text-decoration-line-through">{task.description}</h5>
                                        ) : (
                                            <h5 className="card-title">{task.description}</h5>
                                        )
                                    )
                                }
                                <div className="d-flex justify-content-between">
                                    {
                                        isEditing ? (
                                            <button className="btn btn-success" onClick={() => handleSave(task.id)}>Save</button>
                                        ) : (
                                            <button className="btn btn-primary" onClick={() => handleDone(task.id)}>
                                                {task.completed ? 'Undo' : 'Done'}
                                            </button>
                                        )
                                    }
                                    {
                                        isEditing ? (
                                            <button className="btn btn-secondary" onClick={() => setEditingTaskId(null)}>Cancel</button>
                                        ) : (
                                            <>
                                                <button className="btn btn-warning" onClick={() => handleEdit(task.id, task.description)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                                            </>
                                        )
                                    }
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
