import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

export const Info = styled.span`
  font-size: 30px;
`;

export const Image = styled.div`
  margin: 20px;
`;

export const Button = styled.button`
  height: 50px;
  border: none;
  border-radius: 5px;
  background: #000;
  padding: 10px 20px;
  font-size: 30px;
  color: #FFF;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 1s;

  &:hover{
    color: #FF0;
  }
`;