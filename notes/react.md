## React Concepts

React is Javascript library(not framework) which is used to build user interface, especially single page applications(SPAs).
- Developed by Facebook
- built ui uisng resuable components so Component base
- Efficenly updates and render the right part of Ui where change occur
- Uses Virtual DOM for faster performance

## What is a Single-Page Application (SPA)?
A Single-Page Application (SPA) is a web app that loads a single HTML page and dynamically updates the content without refreshing the page.

Instead of loading new pages from the server every time a user navigates, SPAs use JavaScript to update the current page — making the experience faster and smoother.

## How It Works:
The browser loads the initial HTML, CSS, and JS.

After that, any navigation or user interaction:

Happens on the client-side.

Data is fetched using AJAX or fetch/axios.

Only part of the page updates (without full reload).

Traditional (Multi-Page App):
Clicking "Profile" → browser requests a new HTML page from the server (/profile).

Full page reload.

🔄 SPA:
Clicking "Profile" → JS updates content via JavaScript/React/Vue/Angular.

No page reload — just updates the DOM.



# Diff between Framrwork and Library
in Library, you call the code while in framework, the framework calls our code.(Inversion of control)
in Library we pick and choose what we want while in framwork we follow structure and rules of framework.
framework examples :React*, Angular, Express, Next.js
library:Lodash, jQuery, Axios	



Inversion of Control is a key idea:
With a library, you are in control.
With a framework, it is in control, and you fill in the blanks.

React apps are made of component. A component is a pieice code of UI having its own logic and appearence. A compoenent can be small as a button and can big as entire page.

React component are javascript function which return markup langauge.

function MyButton(){
    return (
        <button>Login</button>
    ); 
}

as we have declared MyButton, we can use it in another components

export default function MyApp(){
    return (
        <div>
        <MyButton />
        </div>
    );
}

- React compoenet should always start with capital character while html tags must be lowercase


For JSX: a javascript xml is a syntax extension for javscript used with react allows to write html like code inside javascript.
- we have to close tags.
- we can't return multiple JSX tags.
- We have to wrap into a shared parent like div or empty (<> </>) 

- We specify the CSS class with ClassName

<div>
{isLoggedIn ?  (<AdminPanel />) : (<LoginForm/>)}
</div>


# Funtional Components
basic reusable building blocks using functions

# UseState
useState is ReactHook that allows you to add a local state to a functional compoenent.Before hooks, only class compoents could have state

const [state,setState]= useState(initalValue)
state – the current state value

setState – a function to update that state

initialValue – the default value of the state

function Product({ initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 0 ? q - 1 : 0));

  return (
    <div>
      <h3>Quantity: {quantity}</h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

Rules of useState
✅ Always call it at the top level of your component.

✅ Never call it inside loops, conditions, or nested functions.

✅ Only call it in React function components or custom hooks.



# UseEffect

is a ReactHook that allows you to run side effect in your functional compoenent.Side effect are operation that afffect things outside the compoent like
Fetching data

Subscribing to a service

Manipulating the DOM

Setting up timers

Logging

useEffect(() => {
  // Your side effect code here

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);


## What are Props?
are used to pass data from parent to child component.
Props are read-only

Similar to function arguments

Used to customize components

## What are Events in React?
React handles events like the browser, but uses camelCase for event names and functions as values.

function Button() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}


## Combining Props & Events
You can pass functions as props to allow child components to trigger logic in the parent.

// Parent Component
function App() {
  function sayHello() {
    alert("Hello from parent!");
  }

  return <Child onGreet={sayHello} />;
}

// Child Component
function Child({ onGreet }) {
  return <button onClick={onGreet}>Greet</button>;
}
✔️ Clicking the Greet button triggers sayHello() from the parent.



## React Hooks
React hooks are built-in function in react that let you use  state and other react feature in functional componenet instead of clss component.

- State is data that changes over data in a component.
It’s like a component’s memory — something it remembers and can update.

🎯 Key Characteristics of State:
Dynamic: It can change when users interact.

Local: Each component can have its own state.

Triggers re-render: When state changes, the component re-renders to show updated UI.

## 🧩 What is componentDidMount?

componentDidMount is a lifecycle method in class components that runs once, right after the component appears (mounts) on the screen.

## 🛠️ Why Hooks?
Hooks:

Make components cleaner and reusable

Remove the need for confusing class syntax

Allow stateful logic to be reused via custom hooks

Help separate concerns (e.g., fetching, subscribing)

## What is useState?
UseSatte is a react hook that allow you to add state to functional component. before that we can only add state to class component.
- Issues in Class Components
Boilerplate & Verbosity: Have to write a lot code

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.handleClick}>Click {this.state.count}</button>;
  }
}

function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
}
Much cleaner and shorter.


- this Binding Confusion
In class components, you had to manually bind methods to this, otherwise they wouldn’t work:

- 3. Component Logic Was Hard to Reuse
- Class components use lifecycle methods like:

    componentDidMount

    componentDidUpdate

    componentWillUnmount

    These were often split and duplicated:


## Use Effect
useEffect is a react hook that let you run side effect in functional component.
A side effect is anything that affects something outside the component — like:

Fetching data

Subscribing to events

Setting timers

Manually updating the DOM

Syncing with localStorage, APIs, etc.

# UseREf
Imagine a box you can put something into — like a number, a DOM element, or even an API connection — and it keeps that thing safe across re-renders.

const myRef = useRef(123);
myRef.current // 👉 this is where the value lives (123)
myRef.current = 456;
✅ React will NOT re-render your component when you update .current.


useREf is a react hook that gives you mutable reference object which presist accross re-renders without causing a re-render when it is updated.

## You can use useRef for:
Accessing DOM elements directly (like document.getElementById)

Storing mutable values that don't trigger re-renders (like timers, counters)

Persisting state-like values without re-rendering the component

## UseContext 
context: a way to share data (theme,langauge) between component without passing it manually props at every level.
its a global state for your component tree- but lighweight.
UseContext is a react hook that allows you to access global data from a context without props maunally passing through every level of component tree.

🧩 3 Simple Steps to Use useContext
1. create a context
import { createContext } from 'react';

const UserContext = createContext(); // can pass default value too

2. 2. Provide the context
3. Consume the context


## useReducer
userReducer is a react hook that allow to manage state in your component just like useState but better when things get complex

Think of it like this:
useState = for simple values (like toggles, counters)

useReducer = for more logic or multiple steps (like a todo list, cart, form steps)

useReducer is a React Hook that is used to manage more complex state logic — especially when:

You have multiple related state values

You want to keep your state transitions clear and predictable

You are doing more than just setState

const [state, dispatch] = useReducer(reducerFunction, initialState);
state: the current state

dispatch(action): the function to send an action to the reducer

reducerFunction: decides how to update the state

initialState: your default state



## UseMemo/UseCallBack
both are used for performance optimization techniques 

Usememo is used to remember a calculated value so react does not recalculate it everytime your component re-render.

Sometimes your component re-renders a lot, and some calculations are slow or expensive.
useMemo helps skip those calculations unless something changes

## useCallBack is used is remember a function so it does not get recreated on every render.

React re-creates all functions on every render.
Sometimes you pass functions as props to child components — if the function changes, the child re-renders unnecessarily.


Use useCallback when:

You pass a function to a memoized child component

You need stable function references in useEffect or useMemo

You’re optimizing performance in large apps


## What is React.memo?
React.memo is a Higher-Order Component (HOC) that prevents a component from re-rendering unless its props change.





## useLayoutEffect
useLayoutEffect is just like useEffect, but it runs synchronously (immediately) after the DOM is updated, before the browser paints what the user sees.

You use useLayoutEffect when you need to measure or change the layout (position, size, scroll, etc.) before the browser draws anything on screen.

This avoids flickering or layout jumping.

## Custom Hook
A Custom Hook is just a JavaScript function that uses built-in React Hooks inside it and follows the naming rule: it must start with use.

