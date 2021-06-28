import selectFieldsReducer from "./selectFieldsReducer";
import uncoveredFieldsReducer from "./uncoveredFieldsReducer";
import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import scoreReducer from "./scoreReducer";

const projectReducer = combineReducers({
  selectFields: selectFieldsReducer,
  game: gameReducer,
  uncoveredFields: uncoveredFieldsReducer,
  score: scoreReducer,
});

export default projectReducer;
