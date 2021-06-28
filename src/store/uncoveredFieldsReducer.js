const initStateUncovered = [];

const uncoveredFieldsReducer = (state = initStateUncovered, action) => {
  switch (action.type) {
    case "ADD_UNCOVER_FIELD":
      return [...state, action.field];
    case "RESET_UNCOVER_FIELD":
      return [];
    default:
      return state;
  }
};

export default uncoveredFieldsReducer;
