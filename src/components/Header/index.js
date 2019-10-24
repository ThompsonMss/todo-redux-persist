import React from 'react';
import { MdFormatColorFill } from 'react-icons/md';
import { Link } from 'react-router-dom'

import { Wrapper, Content, Logo, Config} from './styles';

export default function Header(props){

  const background = '#D1161A';

  return (
    <Wrapper backgroundDarken={background}>
      <Content>
        <Logo>
          <Link to="/">
            TODO-REDUX-PERSIST
          </Link>
        </Logo>
        <Config>
          <Link to="/Config">
            <MdFormatColorFill color={'#FFF'} size={30} />
          </Link>
        </Config>
      </Content>
    </Wrapper>
  );
}