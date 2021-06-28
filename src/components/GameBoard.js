import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useCheckField from "./useCheckField";

const GameBoard = () => {
  const [move, setMove] = useState(1);

  const uncoveredFields = useSelector((state) => state.uncoveredFields);
  const selectFields = useSelector((state) => state.selectFields);
  const game = useSelector((state) => state.game);

  const line = ["1", "2", "3", "4", "5"];
  let name;
  let treasures = [];

  const isUseCheckField = useCheckField();

  useEffect(() => {
    if (game.gameStatus === "END") {
      setTimeout(function () {
        let coverField = document.querySelectorAll(".field");
        coverField.forEach((field) => field.classList.remove("treasure"));
        coverField.forEach((field) => field.classList.remove("uncover"));
        coverField.forEach((field) => (field.innerHTML = ""));
        window.store.dispatch({ type: "RESET_SELECT_FIELD" });
        window.store.dispatch({ type: "RESET_UNCOVER_FIELD" });
        setName();
        drawTreasures();
        window.store.dispatch({
          type: "START",
          status: "START",
          name: name,
          treasures: treasures,
        });
      }, 10000);
    }
    if (game.gameStatus === null) {
      setName();
      drawTreasures();
      window.store.dispatch({
        type: "START",
        status: "START",
        name: name,
        treasures: treasures,
      });
    }
    // eslint-disable-next-line
  }, [game.gameStatus]);

  const setName = () => {
    name = document.cookie.substr(5);
    if (name.length === 0 || name === "null") {
      let name = prompt("Please enter your name");
      document.cookie = "name=" + name;
    }
    return name;
  };

  const drawTreasures = () => {
    do {
      let treasure =
        (Math.floor(Math.random() * (5 - 1 + 1)) + 1).toString() +
        (Math.floor(Math.random() * (5 - 1 + 1)) + 1);

      if (treasures.includes(treasure) === false) {
        treasures.push(treasure);
      }
    } while (treasures.length < 3);
    return treasures;
  };

  useEffect(() => {
    for (let i = 0; i < uncoveredFields.length; i++) {
      let coverField = document.getElementById(uncoveredFields[i].id);
      coverField.innerText = uncoveredFields[i].find;
      if (uncoveredFields[i].find === "T") {
        coverField.classList.add("treasure");
      } else {
        coverField.classList.add("uncover");
      }
    }
    // eslint-disable-next-line
  }, [uncoveredFields]);

  useEffect(() => {
    if (move === 4) {
      window.store.dispatch({
        type: "AFTERMOVE",
        status: "AFTERMOVE",
      });
      for (let i = 0; i < selectFields.length; i++) {
        isUseCheckField.check(selectFields[i]);
      }
      setMove(1);
      window.store.dispatch({ type: "RESET_SELECT_FIELD" });
    }
    // eslint-disable-next-line
  }, [move]);

  useEffect(() => {
    if (game.findedTreasures === 3) {
      window.store.dispatch({
        type: "ADD_SCORE",
        score: { score: game.moves, name: game.player },
      });
      window.store.dispatch({
        type: "END",
        status: "END",
      });
    }
    // eslint-disable-next-line
  }, [game.findedTreasures]);

  const markField = (field) => {
    function isFreeField(element) {
      return element === field;
    }

    function isCoverField(element) {
      return element.id === field;
    }

    if (
      selectFields.some(isFreeField) === false &&
      uncoveredFields !== undefined &&
      uncoveredFields.some(isCoverField) === false
    ) {
      window.store.dispatch({ type: "ADD_SELECT_FIELD", field: field });
      setMove((prevState) => prevState + 1);
    }
  };

  return (
    <div className="gameBoard">
      {line.map((col, id) => {
        return (
          <div key={id}>
            {line.map((row, id) => {
              return (
                <div
                  key={id}
                  id={`${col + row}`}
                  className={
                    selectFields.length > 0 &&
                    selectFields.includes(`${col + row}`)
                      ? `${col + row} field select`
                      : `${col + row} field`
                  }
                  onClick={() => markField(col + row)}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
