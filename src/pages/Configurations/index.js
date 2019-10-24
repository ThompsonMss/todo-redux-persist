import React from 'react';

import { Container, Content, Cors, Cor, Effect } from './styles';

const background = '#D1161A';

export default function Configurations(){
  return(
    <Container background={background}>
      <h2>Paleta de cores</h2>
      <Content>
        <Cors>
          <Cor background="#0984e3"></Cor>
          <Cor background="#636e72"></Cor>
          <Cor background="#d63031"></Cor>
          <Cor background="#fdcb6e"></Cor>
          <Cor background="#00b894"></Cor>
          <Cor background="#c44569"></Cor>
          <Cor background="#f19066"></Cor>
          <Cor background="#574b90"></Cor>
        </Cors>
        <Effect>
          <h2>Aplique uma cor ao seu TODO<br />Clique em cima de uma cor e será aplicado automaticamente.</h2>
        </Effect>
      </Content>
    </Container>
  );
}