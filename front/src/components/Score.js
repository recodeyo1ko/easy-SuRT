import React from "react";

const Score = ({ circleScore, largeCircleScore, generateGrid }) => {
  return (
    <div className="score">
      {/* <button onClick={generateGrid}>グリッドを更新</button> */}
      <p>
        通常のマルのスコア: <span>{circleScore}</span>
      </p>
      <p>
        大きいマルのスコア: <span>{largeCircleScore}</span>
      </p>
    </div>
  );
};

export default Score;
