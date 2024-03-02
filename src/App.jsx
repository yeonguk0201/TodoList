import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import Arrow from './components/Arrow/Arrow';
import BackgroundItem from './components/BackgroundItem/BackgroundItem';
import TodoItem from './components/TodoItem/TodoItem';
import TodolistContainer from './components/TodolistContainer/TodolistContainer';
import AllList from './components/AllList/AllList';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodo] = useState([]);
  const [showAllList, setShowAllList] = useState(false);

  const addTodo = (todoText) => {
    setTodo([...todos, { id: todos.length + 1, text: todoText }]);
  };

  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodo(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const handleShowBtn = () => {
    setShowAllList(!showAllList);
  };

  return (
    <div id="main">
      <BackgroundItem onShow={handleShowBtn}></BackgroundItem>
      <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
      <TodolistContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todoText={todo.text} onDelete={() => deleteTodo(todo.id)} onEdit={(newText) => editTodo(todo.id, newText)} />
        ))}
      </TodolistContainer>
      <Arrow></Arrow>
      {showAllList && <AllList todo={todos} onDelete={deleteTodo} onShow={handleShowBtn}></AllList>}
    </div>
  );
}

export default App;
