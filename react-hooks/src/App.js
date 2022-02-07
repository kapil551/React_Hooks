import React from 'react';
import './App.css';

import ClassUseState from './components/classComponents/ClassUseState';
import ComponentC from './components/functionalComponents/useContextHook/ComponentC';
import UseContextHook from './components/functionalComponents/useContextHook/UseContextHook';
import UseEffectAfterRender from './components/functionalComponents/UseEffectHook/UseEffectAfterRender';
import UseEffectConditionallyRunEffects from './components/functionalComponents/UseEffectHook/UseEffectConditionallyRunEffects';
import UseEffectFetchingData from './components/functionalComponents/UseEffectHook/UseEffectFetchingData';
import UseEffectRunEffectsOnlyOnce from './components/functionalComponents/UseEffectHook/UseEffectRunEffectsOnlyOnce';
import UseEffectWithCleanup from './components/functionalComponents/UseEffectHook/UseEffectWithCleanup';
import UseEffectWithIncorrectDependency from './components/functionalComponents/UseEffectHook/UseEffectWithIncorrectDependency';
import UseReducerSimpleStateAndAction from './components/functionalComponents/UseReducerHook/UseReducerSimpleStateAndAction';
import UseStateHook from './components/functionalComponents/UseStateHook';
import UseStateHookWithArray from './components/functionalComponents/UseStateHookWithArray';
import UseStateHookWithObject from './components/functionalComponents/UseStateHookWithObject';
import UseStateHookWithPreviousState from './components/functionalComponents/UseStateHookWithPreviousState';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">

      <UserContext.Provider value={'Kapil'}>
        <ChannelContext.Provider value={'Software Developer'}>

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
          {/* <UseEffectWithCleanup /> */}

          {/* 9 - useEffect hook with incorrect dependency */}
          {/* <UseEffectWithIncorrectDependency /> */}

          {/* 10 - fetching data with useEffect hook */}
          {/* <UseEffectFetchingData /> */}

          {/* 11 - Context without useContext hook */}
          {/* <ComponentC /> */}

          {/* 12 - Conext with useContext hook */}
          {/* <UseContextHook /> */}

          {/* 13 - useReducer - simple state and action */}
          <UseReducerSimpleStateAndAction />

        </ChannelContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
