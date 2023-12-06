import "./App.css";
import Grid from "./components/Grid";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";

function App() {
  const [isHambergerMenuOpen, setIsHambergerMenuOpen] = useState(false);
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

  const resetScore = () => {
    setCircleScore(0);
    setLargeCircleScore(0);
  };

  return (
    <div className="App">
      <div className="container">
        <Menu
          isHambergerMenuOpen={isHambergerMenuOpen}
          openHambergerMenu={() => setIsHambergerMenuOpen(true)}
          closeHambergerMenu={() => setIsHambergerMenuOpen(false)}
          circleScore={circleScore}
          largeCircleScore={largeCircleScore}
          resetScore={resetScore}
        />
        <Grid
          circlePositions={circlePositions}
          largeCircleIndex={largeCircleIndex}
          updateScore={updateScore}
        />
      </div>
    </div>
  );
}

export default App;
