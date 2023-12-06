import "./App.css";
import Grid from "./components/Grid";
import { useState, useEffect } from "react";
import Score from "./components/Score";

function App() {
  const [circleScore, setCircleScore] = useState(0); // 通常のマルのスコア
  const [largeCircleScore, setLargeCircleScore] = useState(0); // 大きいマルのスコア
  const [circlePositions, setCirclePositions] = useState<number[]>([]);
  const [largeCircleIndex, setLargeCircleIndex] = useState<number | null>(null);

  const updateScore = (isLargeCircle: boolean) => {
    if (isLargeCircle) {
      setLargeCircleScore(largeCircleScore + 1);
    } else {
      setCircleScore(circleScore + 1);
    }

    generateGrid();
  };

  const generateGrid = () => {
    const totalCells = 105;
    const numberOfCircles = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
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
      <Score circleScore={circleScore} largeCircleScore={largeCircleScore} />
      <Grid
        circlePositions={circlePositions}
        largeCircleIndex={largeCircleIndex}
        updateScore={updateScore}
      />
    </div>
  );
}

export default App;
