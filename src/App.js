import './App.css';
import {action, observable} from "mobx";
import {TimerView} from "./components/TimerView";

function App() {
  const appState = observable({
    timer: 0
  });
  appState.resetTimer = action(function reset() {
    appState.timer = 0;
  });
  setInterval(action(function tick() {
    appState.timer += 1;
  }), 1000);
  return (
    <div className="App">
      <TimerView appState={appState} />
    </div>
  );
}

export default App;
