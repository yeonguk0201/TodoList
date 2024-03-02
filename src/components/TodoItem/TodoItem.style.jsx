import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #347b61;
  border-radius: 15px;
  width: 250px;
  height: 350px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 12px;
`;

export const Top = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LogoText = styled.p`
  font-family: Josefin Slab;
  font-size: 28px;
  padding: 18px 0 0 18px;
  font-weight: bold;
`;

export const DateText = styled.p`
  font-family: 'Gowun Dodum', sans-serif;
  font-size: 18px;
  margin: 40px 18px 0 0;
  border-bottom: 2px solid #f42960;
  align-self: self-end;
`;

export const Middle = styled.section`
  padding: 0 18px;
  /*   text-overflow: ellipsis; */
  overflow: hidden;
  /* text-wrap: nowrap; */
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const TextBox = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 26px;

  &.completed {
    text-decoration: line-through;
  }
`;

export const Bottom = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 18px 18px 0;
`;

export const Btn = styled.button`
  border-radius: 10px;
  font-family: 'Noto Serif KR', serif;
  background: rgb(58 174 78);
  border: none;
  width: 48px;
  height: 38px;
  font-size: 15px;
  cursor: pointer;
  color: white;

  &:hover {
    width: 53px;
    transition: 0.3s;
  }

  &.editBtn {
    margin-right: 15px;
  }

  &.delBtn {
    background-color: #da3535;
  }

  &.doneBtn {
    margin-right: 56px;
    background-color: #35aada;
  }

  &.edit {
    border-radius: 8px;
    width: 35px;
    height: 25px;
    font-size: 10px;
  }

  &.save {
    margin: 8px 15px 0 0;

    &:hover {
      background-color: rgb(44 136 60);
    }
  }

  &.cancel {
    background-color: #da3535;
    margin-top: 8px;

    &:hover {
      background-color: #b10d0d;
    }
  }
`;

export const EditInput = styled.input`
  background: transparent;
  border: none;
  font-size: 18px;
  width: 170px;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 5px;
  text-align: center;
  font-family: 'Noto Serif KR', serif;
  font-size: 26px;

  &:focus {
    outline: none;
  }
`;

export const EditBtnContainer = styled.div`
  justify-content: flex-end;
  left: -39px;
  display: flex;
  width: 100%;
  position: absolute;
`;
