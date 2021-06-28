import React from "react";
import GameBoard from "./components/GameBoard";
import Info from "./components/Info";

function App() {
  return (
    <div className="app">
      <h1> Treasure hunter game</h1>
      <GameBoard />
      <Info />
    </div>
  );
}

export default App;
