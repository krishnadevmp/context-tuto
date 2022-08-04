import TodoInput from "./TodoInput";
import TodoItems from "./TodoItems";
import { Button, FlexboxContainer, FlexboxItem } from 'ui-components';
import { TodoContextProvider } from "../contexts/TodoContext";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../Themes";

const TodoPage = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const isLightTheme = themeName === 'light';

  return (
    <FlexboxContainer justifyContent="center">
      <FlexboxContainer className="todo-wrapper" flexDirection="column">
        <FlexboxItem>
          <FlexboxContainer>
            <FlexboxItem>
              <h2>To Do</h2>
            </FlexboxItem>
            <FlexboxItem>
              <Button
                color={isLightTheme ? themes.dark.fontColor : themes.light.fontColor}
                backgroundColor={isLightTheme ? themes.dark.wrapperBgColor : themes.light.wrapperBgColor}
                onClick={toggleTheme}>
                {themeName === 'light' ? 'Dark' : 'Light'}
              </Button>
            </FlexboxItem>
          </FlexboxContainer>

        </FlexboxItem>
        <FlexboxItem>
          <TodoContextProvider>
            <TodoInput />
            <TodoItems />
          </TodoContextProvider>
        </FlexboxItem>
      </FlexboxContainer>
    </FlexboxContainer>
  );
};

export default TodoPage;
