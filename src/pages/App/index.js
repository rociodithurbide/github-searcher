//import logo from "./logo.svg";
import "./reset.css";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  function handleInput(e) {
    const { value } = e.target;
    setUser(value);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <input
          type="text"
          placeholder="Buscar usuario"
          onChange={handleInput}
          className="input"
        />
        <Link to={`/usuario/${user}`} className="link">
          <button className="button">Buscar</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
