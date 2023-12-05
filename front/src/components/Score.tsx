import React from "react";

interface ScoreProps {
  circleScore: number;
  largeCircleScore: number;
}

const Score: React.FC<ScoreProps> = ({ circleScore, largeCircleScore }) => {
  return (
    <div className="score">
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
