import React, { useState } from "react";

const initialValue = "";

const TaskForm = ({ addItem }) => {
    const [task, setTask] = useState(initialValue);

    function handleSubmit(e) {
        e.preventDefault();
        addItem(task);
        setTask(initialValue);
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="task-list-form" onSubmit={handleSubmit}>
                <label htmlFor="task" className="mx-2 fs-5">Task: </label>
                <input
                    type="text"
                    name="task"
                    placeholder="Enter Study Task Here..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                ></input>
                <button type="submit" className="add-task-btn mx-2">
                    Add
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
