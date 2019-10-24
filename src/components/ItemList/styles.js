import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    border-top: .5px solid #EEE;
  }

  height: 50px;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    height: 20px;
    width: 20px;
    border: none;
    background: transparent;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #FFF;
    }
  }

  input {
    height: 18px;
    width: 18px;
    margin-right: 5px;
  }

  span {
    color: white;
    font-size: 20px;
  }
`;

export const Date = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span  {
    color: #FFF;
    font-size: 20px;
  }
`;