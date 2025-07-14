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