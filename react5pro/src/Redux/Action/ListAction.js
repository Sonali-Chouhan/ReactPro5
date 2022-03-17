// addTodo 
export const addTodo = (data) => {
  return {
    type: "Add_Data",
    payload: data,
  };
};
//deleteTodo
export const deleteTodo = (id) => {
  return {
    type: "Delete_Data",
    payload: id,
  };
};
//updateTodo
export const updataTodo = (id,item) => {
  console.log("item",item)
return {
    type: "Update_Data",
    payload:item,
    id:id


  };
};
