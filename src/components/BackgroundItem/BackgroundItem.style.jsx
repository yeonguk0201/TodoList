import styled from 'styled-components';

export const Top = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

export const Bottom = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;
export const Middle = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 31%;
`;

export const MiddleItem = styled.p`
  margin: 0;
  color: white;
  font-size: 100px;
  font-family: Shadows Into Light;
  font-family: Fraunces;
`;
export const TopLeft = styled.p`
  margin: 0;
  color: white;
  font-size: 40px;
  font-family: Josefin Slab;
  padding: 30px 0 0 30px;
`;
export const TopRight = styled.p`
  margin: 0;
  color: white;
  font-size: 25px;
  font-family: Josefin Slab;
  padding: 30px 30px 0 0;
`;
export const BottomLeft = styled.p`
  margin: 0;
  color: white;
  font-size: 20px;
  font-family: Josefin Slab;
  padding: 0 0 30px 30px;
`;
export const BottomRight = styled.p`
  margin: 0;
  color: white;
  font-size: 20px;
  font-family: Josefin Slab;
  padding: 0 30px 30px 0;
`;
export const AllListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 150px;
`;
export const AllListText = styled.p`
  margin: 0;
  align-self: center;
  text-align: center;
  color: white;
  font-size: 30px;
  font-family: Josefin Slab;
`;
export const AllListBtn = styled.div`
  align-self: center;
  width: 70px;
  height: 40px;
  background-color: #f3673b;
  border-radius: 50px;
  margin-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  &:hover {
    width: 80px;
    height: 50px;
    transition: 0.3s;
  }
`;
