import { useSelector } from "react-redux";

const useCheckField = () => {
  const treasures = useSelector((state) => state.game.treasures);
  const selectFields = useSelector((state) => state.selectFields);

  const check = (field) => {
    if (selectFields.length === 3) {
      for (let i = 0; i < 3; i++) {
        if (field === treasures[i]) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "T" },
          });
          window.store.dispatch({
            type: "FIND_TREASURE",
          });
          return "T";
        }
      }

      for (let i = 0; i < 3; i++) {
        if (
          treasures[i].substr(1) === field.substr(1) &&
          (treasures[i].substr(0, 1) - field.substr(0, 1) === 1 ||
            treasures[i].substr(0, 1) - field.substr(0, 1) === -1)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "3" },
          });
          return "3";
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          treasures[i].substr(0, 1) === field.substr(0, 1) &&
          (treasures[i].substr(1) - field.substr(1) === 1 ||
            treasures[i].substr(1) - field.substr(1) === -1)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "3" },
          });
          return "3";
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          treasures[i].substr(1) === field.substr(1) &&
          (treasures[i].substr(0, 1) - field.substr(0, 1) === 2 ||
            treasures[i].substr(0, 1) - field.substr(0, 1) === -2)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "2" },
          });
          return "2";
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          treasures[i].substr(0, 1) === field.substr(0, 1) &&
          (treasures[i].substr(1) - field.substr(1) === 2 ||
            treasures[i].substr(1) - field.substr(1) === -2)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "2" },
          });
          return "2";
        }
      }

      for (let i = 0; i < 3; i++) {
        if (
          (treasures[i].substr(0, 1) - field.substr(0, 1) === 1 ||
            treasures[i].substr(0, 1) - field.substr(0, 1) === -1) &&
          (treasures[i].substr(1) - field.substr(1) === 1 ||
            treasures[i].substr(1) - field.substr(1) === -1)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "2" },
          });
          return "2";
        }
      }

      for (let i = 0; i < 3; i++) {
        if (
          treasures[i].substr(1) === field.substr(1) &&
          (treasures[i].substr(0, 1) - field.substr(0, 1) === 3 ||
            treasures[i].substr(0, 1) - field.substr(0, 1) === -3)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "1" },
          });
          return "1";
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          treasures[i].substr(0, 1) === field.substr(0, 1) &&
          (treasures[i].substr(1) - field.substr(1) === 3 ||
            treasures[i].substr(1) - field.substr(1) === -3)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "1" },
          });
          return "1";
        }
      }

      for (let i = 0; i < 3; i++) {
        if (
          (treasures[i].substr(0, 1) - field.substr(0, 1) === 2 ||
            treasures[i].substr(0, 1) - field.substr(0, 1) === -2) &&
          (treasures[i].substr(1) - field.substr(1) === 2 ||
            treasures[i].substr(1) - field.substr(1) === -2)
        ) {
          window.store.dispatch({
            type: "ADD_UNCOVER_FIELD",
            field: { id: field, find: "1" },
          });
          return "1";
        }
      }
      window.store.dispatch({
        type: "ADD_UNCOVER_FIELD",
        field: { id: field, find: "0" },
      });
      return "0";
    }
  };

  return { check };
};

export default useCheckField;
