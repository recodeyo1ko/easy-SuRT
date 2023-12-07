import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";

interface ScoreProps {
  circleScore: number;
  largeCircleScore: number;
  resetScore: () => void;
}

const Score: React.FC<ScoreProps> = ({
  circleScore,
  largeCircleScore,
  resetScore,
}) => {
  return (
    <div className="score">
      <div className="score-body">
        <Brightness1OutlinedIcon />
        スコア: {largeCircleScore} /{circleScore + largeCircleScore}
        ...(正解/選択数)
      </div>
      <div className="score-body">
        <button onClick={resetScore} className="score-body score-body-button">
          <RestartAltIcon />
          reset
        </button>
      </div>
    </div>
  );
};

export default Score;
