import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #a5e1ff;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  width: 600px;
  height: 800px;
  background-color: white;
  align-self: center;
  overflow: auto;
  border-radius: 30px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 38px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #74d474;
    border-radius: 50px;
    border: 15px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-button:vertical:start:decrement {
    display: block;
    height: 120px;
  }

  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: block;
    width: 25px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgb(143 235 143);
  }
`;

export const LogoText = styled.p`
  color: green;
  font-size: 25px;
  margin: 48px 0 0 60px;
`;

export const ListBox = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  border-bottom: 2px solid gainsboro;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const ListItem = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
`;

export const Btn = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid #74d474;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.3s;
  color: #74d474;
  font-size: 20px;
  line-height: 1px;

  &:hover {
    background-color: #74d474;
    color: white;
  }

  &.completed {
    background-color: #74d474;
    color: white;
  }

  &.del {
    border: 2px solid #ff6a6a;
    color: #ff6a6a;
  &:hover {
    background-color: #ff6a6a;
    color: white;
  }
  }

  &.exit {
    border: 2px solid #a5a5a5;
    position: absolute;
    top: 20px;
    right: 20px;
    color: #a5a5a5;
    line-height: 0px;
  &:hover {
    background-color: #a5a5a5;
    color: white;
  }
}
  }
`;

export const TodoText = styled.p`
  font-size: 20px;
  &.completed {
    text-decoration: line-through;
  }
`;
