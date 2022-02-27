import "./App.css";
import words from "./nivel1/words.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {words.map((w) => (
          <p style={{ color: w.colour, "font-style": "italic" }}>{w.lemma}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
