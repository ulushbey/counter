import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  updateInterval,
} from "./redux/slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const interval = useSelector((state) => state.counter.interval);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input
            value={interval}
            onChange={(e) => dispatch(updateInterval(e.target.value))}
            style={{ padding: "5px", marginBottom: "10px" }}
            type="number"
          />
        </div>
        <div>
          <button
            onClick={() => dispatch(decrement())}
            style={{
              padding: "5px 10px",
              background: "green",
              fontSize: "30px",
              color: "white",
            }}
          >
            -
          </button>
          <span style={{ margin: "0px 10px" }}>Count: {count}</span>
          <button
            onClick={() => dispatch(increment())}
            style={{
              padding: "5px 10px",
              background: "green",
              fontSize: "30px",
              color: "white",
            }}
          >
            +
          </button>
        </div>
        <h2>Interval: {interval}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
