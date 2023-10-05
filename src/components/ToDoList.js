import React, { useState } from "react";

const Form = ({ addItem }) => {
    const [task, setTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // prevents browser from refreshing
        addItem(task); // calls the addItem function which is a function created in the ToDoList component that is set as a property for <Form />
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            {" "}
            {/* sets the submit to the form itself, so the user can either hit enter or hit the add button  */}
            <label htmlFor="task">Task: </label>
            <input
                type="text"
                name="task"
                placeholder="Enter Study Task Here"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

const ItemList = ({ items, moveItem }) => {
    // items array from <ToDoList />
    function handleComplete(index) {
        moveItem(index);
    }

    return (
        <div>
            <ul>
                {" "}
                {/* maps over items array and creates an item component*/}
                {items.map((item, index) => (
                    <Item item={item} key={index} onClick={() => handleComplete(index)} />
                ))}
            </ul>
        </div>
    );
};

const Item = ({ item }) => {
    // creates a list item and receives the item prop from <ItemList />
    return (
        <li>
            <input type="checkbox" />
            <span>{item}</span>
            <button>✏️</button>
            <button>🗑️</button>
        </li>
    );
};

const ToDoList = () => {
    const [activeItems, setActiveItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);

    function addItem(task) {
        // adds items to the list by creating a new array and adding the new task
        setActiveItems([...activeItems, task]);
    }

    function moveItem(taskIndex) {
        const updatedActiveItems = [...activeItems];
        const movedItem = updatedActiveItems.splice(taskIndex, 1)[0];
        setCompletedItems([...completedItems, movedItem]);
        setActiveItems(updatedActiveItems);
    }

    return (
        <div>
            <h3>To Do List</h3>
            <Form addItem={addItem} />{" "}
            {/* adds addItem as a prop to be used by the <Form /> component */}
            <ItemList items={activeItems} moveItem={moveItem} />{" "}
            {/* add the items array as a prop to be mapped over by the <ItemList /> component */}
            <h3>Completed List</h3>
            <ItemList items={completedItems} moveItem={() => {}} />
        </div>
    );
};

export default ToDoList;
