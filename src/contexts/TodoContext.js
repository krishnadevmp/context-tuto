import React, { useState } from "react";

export const TodoContext = React.createContext({
  items: [],
  addItem: () => { },
  removeItem: () => { }
});

export const TodoContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems((prev) => [...prev, item]);
  const removeItem = (index) =>
    setItems((prev) => prev.filter((_item, i) => i !== index));
  return <TodoContext.Provider value={{ items, addItem, removeItem }}>
    {children}
  </TodoContext.Provider>
}
