import React from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask } from '../../store/actions/TaskActions';

import { Container, Box, Input, Button, List, Vazio } from './styles';

import ItemList from '../../components/ItemList';

function Home(props){
  const handleSave = (event) => {
    let tasks = document.getElementById('tasks');
    if(tasks.value !== ''){
      props.addTask(tasks.value);
      tasks.value = '';
    }
  };

  const handleDelete = (id) => {
    props.removeTask(id);
  }

  return(
    <Container background={props.color.color}>
      <h2>Minhas Tarefas</h2>
      <Box backgroundLighten={props.color.color}>
        <List>
          {props.list.tasks.length === 0 
            ?  <Vazio>Nenhuma tarefa.</Vazio>
            : props.list.tasks.map(item => (
              <ItemList check={item.check} delete={() => handleDelete(item.id)} key={item.id} id={item.id} content={item.content} date={item.date}/>
            ))
          }
        </List>
      </Box>
      <Input />
      <Button onClick={handleSave} backgroundDarken={props.color.color}>LANÇAR</Button>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  list: state.tasks,
  color: state.color
});

const mapDispatchToProps = {
  addTask,
  removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);