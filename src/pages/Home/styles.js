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

export const Box = styled.div`
  height: calc(100vh - 300px);
  width: 900px;
  min-width: 250px;
  border-radius: 10px;
  background: ${props => lighten(0.2, props.backgroundLighten)};
  padding: 15px;
  overflow: auto;
  margin-bottom: 10px;
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: 'Insira uma nova tarefa',
  name: 'task',
  id: 'tasks'
}))`
  width: 900px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 900px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 20px;
  color: #FFF;
  background: ${props => darken(0.3, props.backgroundDarken)};
  box-shadow: 2px 2px 2px #000;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Vazio = styled.li`
  color: #FFF;
  font-size: 20px;
  text-align: center;
`;
