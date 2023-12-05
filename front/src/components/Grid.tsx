import React from "react";

interface GridProps {
  circlePositions: number[];
  largeCircleIndex: number | null;
  updateScore: (isLargeCircle: boolean) => void;
}

const Grid: React.FC<GridProps> = ({
  circlePositions,
  largeCircleIndex,
  updateScore,
}) => {
  if (circlePositions.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid-main">
      <div className="grid">
        {[...Array(91)].map((_, index) => (
          <div key={index} className="cell">
            {circlePositions.includes(index) && (
              <div
                className={`${
                  index === largeCircleIndex ? "circle-large" : "circle"
                }`}
                onClick={() => updateScore(index === largeCircleIndex)}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grid;
