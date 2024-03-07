import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 31.25%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 38px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f3673b;
    border-radius: 50px;
    border: 15px solid black;
  }

  &::-webkit-scrollbar-track {
    background-color: black;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #ff8f6b;
  }

  &.many {
    justify-content: flex-start;
  }
`;
