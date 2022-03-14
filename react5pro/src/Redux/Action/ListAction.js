
export const addTodo = (data) => {
 
    return {
      type: "Add_Data",
      payload: data,
    
    };
    
  };
  export const editTodo = (id) => {
    console.log("id",id)
    return {
      type: "Edit_Data",
      payload: id,
    };
  };

  