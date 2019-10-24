import styled from 'styled-components';
import { darken ,lighten } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};

  h2 {
    margin-top: -20px;
    color: #FFF;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  height: 80vh;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
`;

export const Cors = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Cor = styled.button`
  height: 100px;
  width: 100px;
  background: ${props => props.background};
  border-radius: 50px;
  grid-template-rows: 100% 100%;
  cursor: pointer;

  &:hover {
    border: 1px solid black;

  }
`;

export const Effect = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  
  h2 {
    text-align: center;
  }
`;