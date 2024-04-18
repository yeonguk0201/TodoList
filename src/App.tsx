import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import Arrow from './components/Arrow/Arrow';
import BackgroundItem from './components/BackgroundItem/BackgroundItem';
import TodoItem from './components/TodoItem/TodoItem';
import TodolistContainer from './components/TodolistContainer/TodolistContainer';
import AllList from './components/AllList/AllList';
import './App.css';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App(): JSX.Element {
  const [todos, setTodo] = useState<Todo[]>([]);
  const [showAllList, setShowAllList] = useState<boolean>(false);

  const addTodo = (todoText: string): void => {
    setTodo([...todos, { id: uuidv4(), text: todoText, completed: false }]);
  };

  const deleteTodo = (id: string): void => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string): void => {
    setTodo(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const toggleComplete = (id: string): void => {
    setTodo(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleShowBtn = (): void => {
    setShowAllList(!showAllList);
  };

  return (
    <div id="main">
      <BackgroundItem onShow={handleShowBtn}></BackgroundItem>
      <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
      <TodolistContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            isComplete={todo.completed}
            toggleComplete={() => toggleComplete(todo.id)}
            todoText={todo.text}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={(newText: string) => editTodo(todo.id, newText)}
          />
        ))}
      </TodolistContainer>
      <Arrow></Arrow>
      {showAllList && <AllList toggleComplete={toggleComplete} todo={todos} onDelete={deleteTodo} onShow={handleShowBtn}></AllList>}
    </div>
  );
}

export default App;
