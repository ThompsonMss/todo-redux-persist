import React from 'react';
import { Container, Info, Image, Button } from './styles';
import { MdBlurOff } from 'react-icons/md';

export default function Error404(props){
  return(
    <Container>
      <Info>
        Error 404
      </Info>
      <Image>
        <MdBlurOff color={'#000'} size={150}  />
      </Image>
      <Button onClick={() => props.history.push('/')} >Minhas listas</Button>
    </Container>
  );
}