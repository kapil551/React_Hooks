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

2. ```useState``` Hook:

    - 