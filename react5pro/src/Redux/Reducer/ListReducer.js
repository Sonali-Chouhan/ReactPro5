const initialState = {
  List: [],
};
export const ListReducer = function (state = initialState, action) {
  console.log("action",action)
  switch (action.type) {
    case "Add_Data":
      return {
        ...state,
        List: [...state.List, action.payload],
      };
    

    case "Delete_Data":
      let list = state.List;
      list.splice(action.payload, 1);
      return { 
        ...state,
        List: [...list] 
      };
    

    case "Update_Data":
       var Data=state.List
          Data.splice(action.id,1,{
            name:action.payload.name,
            email:action.payload.email,
            password:action.payload.password

          })
          return {
            ...state,
            List:[...Data]
            };
          default:
          return state
};
};

export default ListReducer;
