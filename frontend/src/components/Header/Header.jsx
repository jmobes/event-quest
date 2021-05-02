import "./Header.css";
import MapIcon from "@material-ui/icons/Map";
const Header = () => {
  return (
    <header className="header">
      <MapIcon className="header__logo" />
      <h1 className="header__title">EventQuest</h1>
    </header>
  );
};

export default Header;
