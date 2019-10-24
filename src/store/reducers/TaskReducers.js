const INITIAL_STATE = {
  tasks: []
};

const TaskReducers = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case '@task/add':
      let list = {...state}

      list.tasks.push({
        id: action.payload.id,
        content: action.payload.content,
        check: false,
        date: action.payload.date
      });

      return list;
    
    case '@task/update':
      let listUpdate = {...state};
      listUpdate.tasks[listUpdate.tasks.findIndex(e => e.id === action.payload.id)].check = action.payload.check;

      return listUpdate;

    case '@task/remove':
      let listRemove = {...state};
      listRemove.tasks.splice(listRemove.tasks.findIndex(e => e.id === action.payload.id),1);

      return listRemove;
    default:
      return state;
  }
}

export default TaskReducers;