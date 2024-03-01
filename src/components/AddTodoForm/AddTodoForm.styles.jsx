import styled from 'styled-components';

export const TodoListBtn = styled.button`
  all: unset;
  position: relative;
  top: 118px;
  margin: 0 auto;
  width: 78px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-family: Shadows Into Light;
  font-family: Fraunces;
  font-family: Nanum Brush Script;
  font-family: Vibes;
  font-family: Dancing Script;
  font-family: cinzel;
  font-family: Josefin Slab;

  &:hover {
    font-size: 19px;
    transition: 0.3s;
  }
`;

export const FormBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: rgba(49, 49, 49, 0.728);
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const WriteBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #347b61;
  border-radius: 15px;
  width: 250px;
  height: 350px;
  position: relative;
  z-index: 4;
`;

export const TodoInput = styled.input`
  margin: 0;
  padding: 0;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 15px;
  color: #222222;
  width: 170px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 5px;
  text-align: center;
  position: relative;
  z-index: 5;

  &:placeholder-shown {
    ~ label {
      font-size: 20px;
      bottom: 170px;
      color: #aaa;
      font-weight: none;
    }
    ~ span {
      width: 0;
    }
  }

  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    outline: none;

    ~ label,
    ~ span {
      font-size: 16px;
      bottom: 164px;
      color: white;
      font-weight: bold;
    }
    ~ label {
      bottom: 200px;
    }

    ~ span {
      width: 90%;
    }
  }


  }
`;
export const TodoLabel = styled.label`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  font-weight: bold;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  bottom: 190px;
  transition: all 0.2s;
`;
export const TodoBottomLine = styled.span`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
  position: absolute;
  bottom: 164px;
  left: 50%;
  background-color: white;
  width: 90%;
  height: 2px;
  border-radius: 2px;
  transform: translateX(-50%);
  transition: 0.5s;
`;
