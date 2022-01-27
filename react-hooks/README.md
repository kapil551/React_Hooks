# React Hooks

0. What are ```Hooks```?

    - They allow you to use react features without having to write a class.

    - Ex: State of a component

    - Hooks don't work inside classes.

1. Why Hooks?

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

2. Rules of Hooks:

    - Only call hooks at the Top Levels

    - Don't call hooks inside loops, conditions, or nested functions.

    - Only call hooks from react functions i.e. call them from within react functional components and not just any regular JavaScript function.

3. ```useState``` Hook:

    - https://reactjs.org/docs/hooks-state.html

    - The useState hooks lets you add state to functional components.

    - In class component, the state is always an object, with useState hook, the state doesn't have to be an object.

    - The useState hook returns an array with 2 elements.

    - The first element is the ```current value of the state```, and the second element is the ```state setter function```.

    - New state value depends on the previous state value? You can pass a function to the setter function.

    - When dealing with objects or array, always make sure to ```spread your state variable``` and then call the setter function.

4. ```useState hook with previous state```:

    - 

5. useState hook with object:

    - 

6. useState hook with array:

    - 

7. useEffect hook:

    - https://reactjs.org/docs/hooks-effect.html

    - Doing ```Side Effect Work```.

    - Update the document title

    - Timer

    - Combine the two or more side effects.

    - The useEffect hook lets you perform ```side effects``` in ```functional components```.

    - It is a close replacement for ```componentDidMount```, ```componentDidUpdate```, and ```componentWillUnmount``` in functional components.

10. fetching data with useEffect hook:

    - Install axios:

        - https://axios-http.com/
    
    - Fake API for fetching data:

        - https://jsonplaceholder.typicode.com/