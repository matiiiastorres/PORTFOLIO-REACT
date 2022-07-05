import "../toggle/toggle.css";
import Sun from "../../img/iconos/sun.png";
import Moon from "../../img/iconos/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 185 : 210 }}
      ></div>
    </div>
  );
};

export default Toggle;
