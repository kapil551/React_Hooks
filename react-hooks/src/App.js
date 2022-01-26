import './App.css';

import ClassUseState from './components/classComponents/ClassUseState';
import UseStateHook from './components/functionalComponents/UseStateHook';
import UseStateHookWithObject from './components/functionalComponents/UseStateHookWithObject';
import UseStateHookWithPreviousState from './components/functionalComponents/UseStateHookWithPreviousState';

function App() {
  return (
    <div className="App">

      {/* 1 - useState hook */}
      {/* <ClassUseState />
      <UseStateHook /> */}

      {/* 2 - useState hook with previous state */}
      {/* <UseStateHookWithPreviousState /> */}

      {/* 3 - useState hook with object */}
      <UseStateHookWithObject />
      
    </div>
  );
}

export default App;
