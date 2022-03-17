import { combineReducers } from 'redux'
import {ListReducer}  from "./ListReducer";
import {RegiReducer} from "./RegiReducer"
 const rootReducer = combineReducers({
  RegiReducer,
  ListReducer


})
export default rootReducer;