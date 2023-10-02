import React, { useState } from "react";
import {Container, Col, Row} from "reactstrap";

const initialValue = "";

const TaskForm = ({ addItem }) => {
    const [task, setTask] = useState(initialValue);

    function handleSubmit(e) {
        e.preventDefault();
        addItem(task);
        setTask(initialValue);
    }

    return (
        <form className="task-list-form" onSubmit={handleSubmit}>
            <label htmlFor="task">Task: </label>
            <input
                type="text"
                name="task"
                placeholder="Enter Study Task Here..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            ></input>
            <button type="submit" className="add-task-btn">
                Add
            </button>
        </form>
    );
};

export default TaskForm;
