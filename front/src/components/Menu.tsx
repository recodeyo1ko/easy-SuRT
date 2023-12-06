import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Score from "./Score";

interface MenuProps {
  isHambergerMenuOpen: boolean;
  openHambergerMenu: () => void;
  closeHambergerMenu: () => void;
  circleScore: number;
  largeCircleScore: number;
  resetScore: () => void;
}

const Menu: React.FC<MenuProps> = ({
  isHambergerMenuOpen,
  openHambergerMenu,
  closeHambergerMenu,
  circleScore,
  largeCircleScore,
  resetScore,
}) => {
  if (isHambergerMenuOpen === false) {
    return (
      <div className="hamberger-menu">
        <div className="menu-content">
          <div className="title">easy-SuRT</div>
          <MenuIcon onClick={openHambergerMenu} style={{ fontSize: 32 }} />
        </div>
      </div>
    );
  }

  return (
    <div className="hamberger-menu">
      <div className="menu-content">
        <div className="title">easy-SuRT</div>
        <MenuOpenIcon onClick={closeHambergerMenu} style={{ fontSize: 32 }} />
      </div>
      <Score
        circleScore={circleScore}
        largeCircleScore={largeCircleScore}
        resetScore={resetScore}
      />
    </div>
  );
};

export default Menu;
