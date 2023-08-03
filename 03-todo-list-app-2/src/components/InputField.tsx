import '../App.css';
import React from 'react';
import { Task } from '../models/models';

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: Function;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
    return (
        <div className="row">
            <form className="d-flex" onSubmit={(e) => handleAdd(e)}>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    className="form-control form-control-lg me-2"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">ADD</button>
            </form>
        </div>
    );
};

export default InputField;
