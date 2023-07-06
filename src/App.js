import './App.css';
import {action, observable} from "mobx";
import {TimerView} from "./components/TimerView";
import {Count} from "./components/Count/Count";
import {countStore} from "./components/Count/CountStore";

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
      <Count store={countStore}/>
    </div>
  );
}

export default App;
