import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Progress, Container, Row, Col } from "reactstrap";

const SideBar = () => {
  const [items, setItems] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  function handleAddItem(item) {
    const newItem = { id: uuid(), task: item, complete: false };
    setItems((items) => [...items, newItem]);
  }

  function handleRemoveItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  function calculateCompletionPercentage(items) {
    const completedTasks = items.filter((item) => item.complete).length;
    const totalTasks = items.length;
    const percentage = (completedTasks / totalTasks) * 100;
    return percentage;
  }

  const completeTask = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, complete: !item.complete } : item
    );
    // Update the items state with the updated completion status
    setItems(updatedItems);
  };

  useEffect(() => {
    const percentage = calculateCompletionPercentage(items);
    setCompletionPercentage(percentage);
  }, [items]); // Recalculate percentage whenever items change

  return (
    <Container>
      <Row>
        <h2>Study Tasks</h2>
      </Row>
      <Row>
        <TaskForm addItem={handleAddItem} />
      </Row>
      <Row>
        <TaskList
          items={items}
          removeItem={handleRemoveItem}
          completeTask={completeTask}
        />
      </Row>
      <Row>
        <Col>
          <Progress
            style={{ position: "relative", borderRadius: 0 }}
            color="success"
            striped
            animated
            min={0}
            value={completionPercentage}
          >
            {completionPercentage}%
          </Progress>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBar;
