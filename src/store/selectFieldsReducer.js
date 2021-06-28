const initStateSelect = [];

const selectFieldsReducer = (state = initStateSelect, action) => {
  switch (action.type) {
    case "ADD_SELECT_FIELD":
      return [...state, action.field];
    case "RESET_SELECT_FIELD":
      return [];
    default:
      return state;
  }
};

export default selectFieldsReducer;
