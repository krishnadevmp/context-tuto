import { useContext } from "react";
import { Button, Card, FlexboxContainer, FlexboxItem } from "ui-components";
import { TodoContext } from "../contexts/TodoContext";

const TodoItems = () => {
  const { items, removeItem } = useContext(TodoContext);

  return (
    <FlexboxContainer flexDirection="column">
      <FlexboxItem>
        <h4>Tasks</h4>
      </FlexboxItem>

      {
        items.length ?
          items.map((item, i) => (
            <FlexboxItem className="list-item" key={`${item}${i}`}>
              <Card className="todo-item-card">
                <FlexboxContainer justifyContent="space-between">
                  <FlexboxItem>
                    {item}
                  </FlexboxItem>
                  <FlexboxItem>
                    <Button className="remove-button"
                      onClick={() => removeItem(i)}>Remove</Button>
                  </FlexboxItem>
                </FlexboxContainer>
              </Card>
            </FlexboxItem>
          )) : <FlexboxItem>
            You have no tasks!
          </FlexboxItem>}
    </FlexboxContainer>
  );
};

export default TodoItems;
