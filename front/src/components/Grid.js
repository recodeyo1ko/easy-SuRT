import React from "react";

const Grid = ({ circlePositions, largeCircleIndex, updateScore }) => {
  if (circlePositions.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid-main">
      <div className="grid">
        {[...Array(60)].map((_, index) => (
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
