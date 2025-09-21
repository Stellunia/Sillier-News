import { useNavigate } from "react-router"
import "../styling/navbar.css"

// Navbar navigation and routing
export function Navbar({ changePage }) {
  let navigate = useNavigate();
  return (
    <nav className="navigationbar">
      <ul className="navlist">
        <button className="first-button" onClick={() => navigate("/")}>News Page</button>
        <button className="last-button" onClick={() => navigate("/submit")}>Submit News</button>
      </ul>
    </nav>
  );
}