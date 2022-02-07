## React Hooks

### What are ```Hooks```?

- They allow you to use react features without having to write a class.

- Ex: State of a component

- Hooks don't work inside classes.

### Why Hooks?

- State can only be used in class components.

- Understand how this keyword works in JavaScript.

- Remember to bind event handles in class components.

- Classes don't minify very well and make hot reloading very unreliable.

- This is no particular way to reuse stateful component logic.

- Higher Order Components(HOC) and render pattern do address this problem.

- Makes the code harder to follow.

- There is a need to share stateful logic in a better way.

- Create components for complex scenarios such as data fetching and subscribing to events.

- Related code is not organized in one place.

- Ex: Data Fetching - In componentDidMount and componentDidUpdate

- Ex: Event listeners - In componentDidMount and componentWillUnmount

### Rules of Hooks:

- Only call hooks at the Top Levels

- Don't call hooks inside loops, conditions, or nested functions.

- Only call hooks from react functions i.e. call them from within react functional components and not just any regular JavaScript function.

### ```useState``` Hook - ```state```:

- https://reactjs.org/docs/hooks-state.html

- The useState hooks lets you add state to functional components.

- In class component, the state is always an object, with useState hook, the state doesn't have to be an object.

- The useState hook returns an array with 2 elements.

- The first element is the ```current value of the state```, and the second element is the ```state setter function```.

- New state value depends on the previous state value? You can pass a function to the setter function.

- When dealing with objects or array, always make sure to ```spread your state variable``` and then call the setter function.

### ```useState hook with previous state```:

- 

### useState hook with object:

- 

### useState hook with array:

- 

### ```useEffect``` hook - ```side effects```:

- https://reactjs.org/docs/hooks-effect.html

- Doing ```Side Effect Work```.

- Update the document title

- Timer

- Combine the two or more side effects.

- The useEffect hook lets you perform ```side effects``` in ```functional components```.

- It is a close replacement for ```componentDidMount```, ```componentDidUpdate```, and ```componentWillUnmount``` in functional components.

### fetching data with useEffect hook:

- Install axios:

    - https://axios-http.com/

- Fake API for fetching data:

    - https://jsonplaceholder.typicode.com/

### ```useContext``` hook - ```context API```:

![]("./context.PNG")

- Directly send data/props to the required component without having to manually drill down the props through every level of the react component tree, this is where ```context``` comes into picture.

- ```Context``` provides a way to pass data through the component tree without having to pass props down manually at very level.

### ```useReducer``` hook - ```reducers```:

- useReducer is a hook that is used for state management.

- It is an alternative to useState.

- Difference b/w useState and useReducer?

    - useState is built using useReducer.

- When to use ```useReducer``` v/s when to use ```useState```?

| Scenario | useState | useReducer |
| --- | --- | --- |
| **Type of state** | Number, String, Boolean | Object or Array |
| **Number of State transitions** | One or two | Too many state transitions |
| **Related state transitions?** | No | Yes |
| **Business Logic** | No business logic | complex business logic |
| **Local vs global state** | Local | Global |

- ```reducers``` in JavaScript:

    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

- reduce v/s useReducer:

    - reduce in JavaScript:

        - ```JavaScript
            array.reduce(reducer, initialValue)
          ```
        - ```JavaScript
            singleValue = reducer(accumulator, itemValue)
          ```
        - ```JavaScript
           reduce mathod returns a single value
          ```
    
    - useReducer in react:

        - ```JavaScript
            useReducer(reducer, initialState)
          ```
        - ```JavaScript
           newState = reducer(currentState, action)
          ```
        - ```JavaScript
            useReducer returns a pair of values.
            [newState, dispatch]
          ```
- ```useReducer with useContext```:

    - userReducer - Local state management.

    - Share state between components - Global state management.

    - ```useReducer + useContext```:

        - useReducer with useContext can be used for global state management.

![]("./UseReducerWithUseContext.PNG")

### ```useCallback``` hook - ```performance optimization```:

- ```React.memo()```:

    - It is a higher order component that will prevent a functional component from being re-rendered if it's props or state do not change.

- What is a useCallback hook?

    - useCallback is a hook that will return a ```memorized``` version of the callback function that only changes if one of the ```dependencies``` has changed.

- Why useCallback hook?

    - It is useful when ```passing callback functions``` to optimized child components that rely on reference equality to ```prevent unnecessary renders```.

- When to useMemo and useCallback?

    - https://kentcdodds.com/blog/usememo-and-usecallback

### ```useMemo``` hook - ```performance optimization```:

- https://reactjs.org/docs/hooks-reference.html#usememo

### What is the ```difference b/w useMemo and useCallback``` hooks?

- Search about it

### ```useRef``` hook:

- useRef is a hook that makes it possible to access DOM nodes directly within functional components.

- It can also be used to store any mutable value, and what is great about useRef is that the value will persist through the re-renders while also not causing any additional renders when the value changes.