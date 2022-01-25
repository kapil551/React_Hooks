import './App.css';

import ClassUseState from './components/classComponents/ClassUseState';
import UseStateHook from './components/functionalComponents/UseStateHook';

function App() {
  return (
    <div className="App">

      {/* 1 - useState hook */}
      <ClassUseState />
      <UseStateHook />
      
    </div>
  );
}

export default App;
