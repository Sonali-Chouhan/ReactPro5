const initialState = {
    List: [],
  };
  export const ListReducer = function (state = initialState, action) {

    switch (action.type) {
     
    case "Add_Data":
        return {
          ...state,
          List: [...state.List, action.payload],
        };
      
      //Edit User
      case "Edit_Data":
        let items = state.data;
        let current_object = items[action.payload];
      
        return {
          ...state,
          isEdit: current_object,
        };
  
      
      default:
        return state;
    }
  }
  export default ListReducer;