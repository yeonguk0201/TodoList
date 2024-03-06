import { Background, Container, ListBox, LogoText, ListContainer, ListItem, Btn, TodoText } from './AllList.style';

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
                완료
              </Btn>
              <ListItem>
                <TodoText className={todos.completed ? 'completed' : ''}>{todos.text}</TodoText>
              </ListItem>
              <Btn className="del" onClick={() => onDelete(todos.id)}>
                삭제
              </Btn>
            </ListContainer>
          ))}
        </ListBox>
      </Container>
    </Background>
  );
};
export default AllList;
