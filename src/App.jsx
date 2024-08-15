import { useState } from "react";
import "./App.css";
import LciText from "./LciText";

const nameScores = new Map(); // Move the map outside the component

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [score, setScore] = useState(null);

  const normalizeName = (name) => {
    return name.replace(/[^a-zA-Z]/g, "").toLowerCase();
  };

  const calculateLoveScore = () => {
    const normalizedName1 = normalizeName(name1);
    const normalizedName2 = normalizeName(name2);
    const combinedName = [normalizedName1, normalizedName2].sort().join("");

    if (nameScores.has(combinedName)) {
      setScore(nameScores.get(combinedName));
    } else {
      const newScore = Math.floor(Math.random() * 100) + 1;
      nameScores.set(combinedName, newScore);
      setScore(newScore);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/Love.png" alt="Love Calculator Logo" className="logo" />
        <h1 className="title">Find Out Your Match Odds!</h1>
      </header>
      <div className="card">
        <input
          type="text"
          placeholder="Your Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Partner's Name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          className="input"
        />
        <button onClick={calculateLoveScore} className="button">
          Calculate Love Score
        </button>
        {score !== null && (
          <p className="score">Your love score is: {score} LCI</p>
        )}
      </div>
      <LciText />
    </div>
  );
};

export default App;
