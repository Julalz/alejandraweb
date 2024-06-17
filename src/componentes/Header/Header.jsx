import "./header.css";
import Menu from "../Menú/Menu";

function Header() {
  return (
    <header className="logo-container">
      <h1 className="name">Alejandra Quintero </h1>
      <h4 className="second-name">STUDIO & BEAUTY LOUNGE</h4>
      <Menu />
    </header>
  );
}

export default Header;
