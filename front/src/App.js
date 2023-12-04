import "./App.css";
import { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Score from "./components/Score";

function App() {
  const [circleScore, setCircleScore] = useState(0); // 通常のマルのスコア
  const [largeCircleScore, setLargeCircleScore] = useState(0); // 大きいマルのスコア
  const [circlePositions, setCirclePositions] = useState([]);
  const [largeCircleIndex, setLargeCircleIndex] = useState(null);

  const updateScore = (isLargeCircle) => {
    if (isLargeCircle) {
      setLargeCircleScore(largeCircleScore + 1);
    } else {
      setCircleScore(circleScore + 1);
    }

    generateGrid();
  };

  const generateGrid = () => {
    const totalCells = 98;
    const numberOfCircles = Math.floor(Math.random() * (30 - 15 + 1)) + 20;
    let newCirclePositions = [];
    for (let i = 0; i < totalCells; i++) {
      if (newCirclePositions.length < numberOfCircles) {
        if (Math.random() < numberOfCircles / totalCells) {
          newCirclePositions.push(i);
        }
      }
    }
    setCirclePositions(newCirclePositions);
    setLargeCircleIndex(
      newCirclePositions[Math.floor(Math.random() * newCirclePositions.length)]
    );
  };

  useEffect(() => {
    generateGrid();
  }, []);

  return (
    <div className="App">
      <Grid
        circlePositions={circlePositions}
        largeCircleIndex={largeCircleIndex}
        updateScore={updateScore}
      />
      <Score
        circleScore={circleScore}
        largeCircleScore={largeCircleScore}
        generateGrid={generateGrid}
      />
    </div>
  );
}

export default App;
