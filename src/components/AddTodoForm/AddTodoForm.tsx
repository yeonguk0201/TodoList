import React, { useState } from 'react';
import { TodoListBtn, FormBackground, WriteBox, TodoInput, TodoLabel, TodoBottomLine } from './AddTodoForm.styles';

interface AddTodoFormProps {
  onAddTodo: (todoText: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [isCliked, setIsClicked] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleBtnClicked = (): void => {
    setIsClicked(!isCliked);
  };

  const handleWriteBox = (e: React.FormEvent<HTMLFormElement>): void => {
    e.stopPropagation();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (): void => {
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
