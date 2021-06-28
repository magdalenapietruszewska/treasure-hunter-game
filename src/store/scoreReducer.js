const initStateScore = [];

const scoreReducer = (state = initStateScore, action) => {
  switch (action.type) {
    case "ADD_SCORE":
      return [...state, action.score];
    default:
      return state;
  }
};

export default scoreReducer;
