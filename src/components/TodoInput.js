import { useContext, useState } from "react";
import { Button, FlexboxContainer, FlexboxItem, TextField } from "ui-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoInput = () => {
  const [item, setItem] = useState("");
  const handleOnChange = (e) => setItem(e.target.value);
  const { addItem } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  return (
    <FlexboxContainer flexDirection="row">
      <FlexboxItem>
        <TextField
          border="1px solid rgba(31, 82, 182, 0.2)"
          value={item} onChange={handleOnChange}
          title="Enter a task"
          textFieldSuffix=""
        />
      </FlexboxItem>
      <FlexboxItem>
        <Button
          disabled={!item.length}
          onClick={() => {
            setItem("");
            addItem(item);
          }}>
          Add item
        </Button>
      </FlexboxItem>
    </FlexboxContainer>
  );
};

export default TodoInput;