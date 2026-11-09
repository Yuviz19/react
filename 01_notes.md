# React

## What is React?
- a js library for building user interfaces

```js
// in plain js

const heading = document.createElement("h1");
heading.textContent = "Hello, World!";
document.body.appendChild(heading);

// in react
function App() {
  return <h1>Hello, World!</h1>;
}
```

## What iis JSX?
- aka Javascript XML 
- allows to write HTML-like code in JS
- and behind the scenes this xml get transformed to JS function calls

```js
const element = <h1>Hello</h1>;
// becomes

const name = "Void";

function App() {
  return <h1>Hello, {name}</h1>;
}
```

## Components
- they are the building blocks of react apps
- they are generally js functions that return react elements

```js
function Header() {
  return <h1>My Application</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome!</p>
    </div>
  );
}
```
- so here the header and app are components
- and app uses header

## Props
- stands for properties
- allows components to pass data to child components
