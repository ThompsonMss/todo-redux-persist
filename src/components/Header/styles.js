import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: ${props => darken(0.3, props.backgroundDarken)};
  padding: 0 10px;
`;

export const Content = styled.div`
  height: 50px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
`;

export const Logo = styled.span`

  font-size: 20px;
  a{
    text-decoration: none;
    color: #FFF;
  }
`;

export const Config = styled.div`

`;