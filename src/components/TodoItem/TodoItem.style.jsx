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
  font-family: Nanum Brush Script;
  font-size: 27px;
  padding: 40px 18px 0 0;
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
  font-family: Nanum Brush Script;
  font-size: 26px;
`;

export const Bottom = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 18px 18px 0;
`;

export const Btn = styled.button`
  border-radius: 10px;
  font-family: Nanum Brush Script;
  background: green;
  border: none;
  width: 48px;
  height: 48px;
  font-size: 24px;
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
    background-color: red;
  }
  &.edit {
    width: 35px;
    height: 25px;
    font-size: 20px;
  }
  &.save {
    margin: 8px 15px 0 0;
  }
  &.cancel {
    background-color: red;
    margin-top: 8px;
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
  font-family: Nanum Brush Script;
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
