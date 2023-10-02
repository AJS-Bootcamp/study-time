import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const TaskList = ({ items, removeItem, completeTask }) => {
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        removeItem={removeItem}
                        completeTask={completeTask}
                    />
                ))}
            </ul>
        </div>
    );
};

function Item({ item, removeItem, completeTask }) {
    return (
        <li>
            <Container>
                <Row>
                    <Col xs="3" sm="3">
                        <Button
                            color="success"
                            outline
                            active={item.complete}
                            onClick={() => completeTask(item.id)}
                        >
                            Complete
                        </Button>
                    </Col>
                    <Col xs="6" sm="6">
                        <span className="list-item">{item.task}</span>
                    </Col>
                    <Col xs="3" sm="3">
                        <Button
                            color="danger"
                            onClick={() => removeItem(item.id)}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}

export default TaskList;
