import { Background, Container, ListBox, LogoText, ListContainer, ListItem, Btn, TodoText } from './AllList.style';
import { IoTrashOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const AllList = ({ todo, onDelete, onShow, toggleComplete }) => {
  return (
    <Background>
      <Container>
        <LogoText>All of Lists</LogoText>
        <Btn className="exit" onClick={onShow}>
          x
        </Btn>
        <ListBox>
          {todo.map((todos) => (
            <ListContainer key={todos.id}>
              <Btn className={todos.completed ? 'completed' : ''} onClick={() => toggleComplete(todos.id)}>
                <IoMdCheckmarkCircleOutline />
              </Btn>
              <ListItem>
                <TodoText className={todos.completed ? 'completed' : ''}>{todos.text}</TodoText>
              </ListItem>
              <Btn className="del" onClick={() => onDelete(todos.id)}>
                <IoTrashOutline />
              </Btn>
            </ListContainer>
          ))}
        </ListBox>
      </Container>
    </Background>
  );
};
export default AllList;
