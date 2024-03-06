import { useState } from 'react';
import { TodoListBtn, FormBackground, WriteBox, TodoInput, TodoLabel, TodoBottomLine } from './AddTodoForm.styles';

const AddTodoForm = ({ onAddTodo }) => {
  const [isCliked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleBtnClicked = (e) => {
    setIsClicked(!isCliked);
  };

  const handleWriteBox = (e) => {
    e.stopPropagation();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    onAddTodo(inputValue);
    setIsClicked(!isCliked);
    setInputValue('');
  };

  return (
    <div>
      <TodoListBtn onClick={handleBtnClicked}>
        MORE<br></br>MORE<br></br>MORE
      </TodoListBtn>
      {isCliked && (
        <FormBackground onClick={handleBtnClicked}>
          <WriteBox onSubmit={handleAddTodo} onClick={handleWriteBox}>
            <TodoInput type="text" placeholder="" value={inputValue} onChange={handleInputChange} autoFocus required></TodoInput>
            <TodoLabel>Todo</TodoLabel>
            <TodoBottomLine></TodoBottomLine>
          </WriteBox>
        </FormBackground>
      )}
    </div>
  );
};

export default AddTodoForm;
