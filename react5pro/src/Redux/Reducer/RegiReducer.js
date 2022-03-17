const initialState = {
    List: [],
  };
  export const RegiReducer = function (state = initialState, action) {
    console.log("action",action)
    switch (action.type) {
      case "Add_Data":
        return {
          ...state,
          List: [...state.List, action.payload],
        };
        default:
            return state
    };
  };
  
  export default RegiReducer; 