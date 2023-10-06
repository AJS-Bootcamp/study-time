import React from "react";
import { Button, List } from "reactstrap";

const TaskList = ({ items, removeItem, completeTask }) => {
    return (
        <div>
            <List type="unstyled">
                {items.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        removeItem={removeItem}
                        completeTask={completeTask}
                    />
                ))}
            </List>
        </div>
    );
};

function Item({ item, removeItem, completeTask }) {
    return (
        <li className="d-flex justify-content-end m-2">

                        <span className="list-item me-auto fs-5">{item.task}</span>

                        <Button
                            color="success"
                            outline
                            size="sm"
                            className="mx-2"
                            active={item.complete}
                            onClick={() => completeTask(item.id)}
                        >
                            Done
                        </Button>

                        <Button
                            color="danger"
                            size="sm"
                            className=""
                            onClick={() => removeItem(item.id)}
                        >
                            Delete
                        </Button>

        </li>
    );
}

export default TaskList;
