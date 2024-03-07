import { useState } from 'react';
import { Container, Top, LogoText, DateText, Middle, TextBox, Bottom, Btn, EditInput, EditBtnContainer } from './TodoItem.style';
import { IoTrashOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlinePencil } from 'react-icons/hi2';

const TodoItem = ({ todoText, onDelete, onEdit, isComplete, toggleComplete }) => {
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoText);

  const handleDelBtn = () => {
    onDelete();
  };

  const handleEditBtn = () => {
    setIsEditing(true);
  };

  const handleSaveBtn = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  const handleCancelBtn = () => {
    setIsEditing(false);
    setEditedText(todoText);
  };

  const handleCompleted = () => {
    toggleComplete();
  };

  return (
    <Container>
      <Top>
        <LogoText>
          Todo<br></br>List
        </LogoText>
        <DateText>{formattedDate}</DateText>
      </Top>
      <Middle>
        {isEditing ? (
          <form>
            <div style={{ display: 'flex', width: '100%' }}>
              <EditInput type="text" value={editedText} onSubmit={handleSaveBtn} onChange={(e) => setEditedText(e.target.value)} autoFocus />
            </div>
            <EditBtnContainer>
              <Btn className="edit save" onClick={handleSaveBtn}>
                저장
              </Btn>
              <Btn className="edit cancel" onClick={handleCancelBtn}>
                취소
              </Btn>
            </EditBtnContainer>
          </form>
        ) : (
          <TextBox className={isComplete ? 'completed' : ''}>{todoText}</TextBox>
        )}
      </Middle>
      <Bottom>
        <Btn className="doneBtn" onClick={handleCompleted}>
          <IoMdCheckmarkCircleOutline />
        </Btn>
        <Btn className="editBtn" onClick={handleEditBtn}>
          <HiOutlinePencil />
        </Btn>
        <Btn className="delBtn" onClick={handleDelBtn}>
          <IoTrashOutline />
        </Btn>
      </Bottom>
    </Container>
  );
};

export default TodoItem;
