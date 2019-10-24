export const addTask = (content) => {
  return {
    type: '@task/add',
    payload: {
      id: new Date().getTime(),
      content,
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    }
  }
};

export const updateTask = (id, check) => {
  return {
    type: '@task/update',
    payload: {
      id,
      check
    }
  };
}

export const removeTask = (id) => {
  return {
    type: '@task/remove',
    payload: {
      id
    }
  }
}