import React from 'react';
import { MdRemoveCircle } from 'react-icons/md';

import { darken} from 'polished';
import {Container, Content, Date} from './styles';

import { updateTask } from '../../store/actions/TaskActions';
import { connect } from 'react-redux';

class ItemList extends React.Component{
  
  background = '#5f5f5f';

  handleCheck = (id) => {
    this.props.updateTask(id, true);
  };
  
  render(){
    return(
      <Container>
        <Content>
          <button onClick={this.props.delete}>
            <MdRemoveCircle color={darken(0.3, this.background)} size={20}/>
          </button> 
          {this.props.check 
          ? (<input id="ckbox" type="checkbox" checked/>) 
          : (<input id="ckbox" onClick={() => this.handleCheck(this.props.id)} type="checkbox" />)
          }
          <span>{this.props.content}</span>
        </Content>
        <Date>
          <span>{this.props.date}</span>
        </Date>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  list: state.task
});

const mapDispatchToProps = {
  updateTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);