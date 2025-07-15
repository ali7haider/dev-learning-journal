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


