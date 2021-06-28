import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
  const game = useSelector((state) => state.game);
  const score = useSelector((state) => state.score);
  let sortScore = score.sort((a, b) =>
    a.score > b.score ? 1 : b.score > a.score ? -1 : 0
  );

  return (
    <div className="info">
      {game.gameStatus === "START" && (
        <p>Choose three positions to find treasures!</p>
      )}
      {game.gameStatus === "AFTERMOVE" && (
        <p>Not bad! Try again to find all treasures!</p>
      )}
      {game.gameStatus === "END" && (
        <>
          <p className="specialInfo">Woohoo! You found all treasures!</p>
        </>
      )}
      {game.gameStatus !== "END" ? (
        <div>
          <ul>
            <li> T - Congrats! It's treasure! </li>
            <li> 3 - It's reeeeeeally close! </li>
            <li> 2 - You are close. Try again! </li>
            <li> 1 - Look for treasure a little further.</li>
            <li> 0 - Oh! It's not even close.. </li>
          </ul>
        </div>
      ) : (
        <>
          {sortScore.map((result, id) => (
            <li key={id}>
              {result.score} - {result.name}
            </li>
          ))}
        </>
      )}
    </div>
  );
};

export default Info;
