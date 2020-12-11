import "./App.css";
import logo from "./logo.svg";
import PersonList from "./PersonList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PersonList></PersonList>
      </header>
    </div>
  );
}

export default App;
