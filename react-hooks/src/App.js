import './App.css';

import ClassUseState from './components/classComponents/ClassUseState';
import UseEffectAfterRender from './components/functionalComponents/UseEffectHook/UseEffectAfterRender';
import UseStateHook from './components/functionalComponents/UseStateHook';
import UseStateHookWithArray from './components/functionalComponents/UseStateHookWithArray';
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
      {/* <UseStateHookWithObject /> */}

      {/* 4 - useState hook with array */}
      {/* <UseStateHookWithArray /> */}

      {/* 5 - useEffect hook after render */}
      <UseEffectAfterRender />
      
    </div>
  );
}

export default App;
