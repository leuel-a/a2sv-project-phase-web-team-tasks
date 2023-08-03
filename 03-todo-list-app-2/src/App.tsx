import React, { useState } from 'react';
import './App.css';
import TaskList from "./components/TaskList";
import InputField from './components/InputField';
import { Task } from "./models/models";

const App: React.FC = () => {
    const [ task, setTask ] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTasks([...tasks, { id: Date.now(), description: task, completed: false }]);
        setTask('');
    }

    return (
      <div className="container d-flex justify-content-center flex-column main__container">
        <div className="row">
            <h1 className="h3 text-secondary ms-2 mt-5 mb-3">
                Create your own to-do list
            </h1>
        </div>
        <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    );
}

export default App;
