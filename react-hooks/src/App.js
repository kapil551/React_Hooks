import './App.css';

import ClassUseState from './components/classComponents/ClassUseState';
import UseEffectAfterRender from './components/functionalComponents/UseEffectHook/UseEffectAfterRender';
import UseEffectConditionallyRunEffects from './components/functionalComponents/UseEffectHook/UseEffectConditionallyRunEffects';
import UseEffectRunEffectsOnlyOnce from './components/functionalComponents/UseEffectHook/UseEffectRunEffectsOnlyOnce';
import UseEffectWithCleanup from './components/functionalComponents/UseEffectHook/UseEffectWithCleanup';
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
      {/* <UseEffectAfterRender /> */}
      
      {/* 6 - useEffect hook conditionally run effects */}
      {/* <UseEffectConditionallyRunEffects /> */}

      {/* 7 - useEffect hook run effects only once */}
      {/* <UseEffectRunEffectsOnlyOnce /> */}

      {/* 8 - useEffect hook with cleanup */}
      <UseEffectWithCleanup />

    </div>
  );
}

export default App;
