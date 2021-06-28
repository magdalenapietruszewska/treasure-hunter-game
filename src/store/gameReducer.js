const initStateGame = {
  player: null,
  gameStatus: null,
  moves: 0,
  treasures: [],
  findedTreasures: 0,
};

const gameReducer = (state = initStateGame, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        gameStatus: action.status,
        player: action.name,
        treasures: action.treasures,
        findedTreasures: 0,
        moves: 0,
      };
    case "AFTERMOVE":
      return {
        ...state,
        gameStatus: action.status,
        moves: state.moves + 1,
      };
    case "FIND_TREASURE":
      return {
        ...state,
        findedTreasures: state.findedTreasures + 1,
      };
    case "END":
      return {
        ...state,
        gameStatus: action.status,
      };
    case "NEXTGAME":
      return {
        ...state,
        gameStatus: action.status,
        moves: 1,
        findedTreasures: 0,
      };
    default:
      return state;
  }
};

export default gameReducer;
