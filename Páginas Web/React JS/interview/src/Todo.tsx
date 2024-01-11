import React, { useState } from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask.trim()) {
            // Si el campo está vacío o solo contiene espacios en blanco, no agregar tarea
            return;
        }
    
        setTasks((tasks) => [
            ...tasks,
            { id: tasks.length, text: newTask, completed: false },
        ]);
        setNewTask('');
    };
    
    const toggleTask = (taskId: number) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    };

    return (
        <div>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        onClick={() => toggleTask(task.id)}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default TodoList;