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
  - allows to pass data from component to another component
- prefer to use js higher order functions to go through
  - each individual entity of the array or the object

```js
function Student(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return <Student name="Yuvi" />;
}
```

## States

- state is the data a component manages internally
- whenever the compoonent state changes, react re-renders the the component to display new info

- for example, if we have
```js
export default App(){
  let state = "yes";

  const function handleClick(){
    state = "no";
  }

  return (
    <main>
      <h1 classname="">Is it important to learn react<h1/>
      <button onClick={handleClick}>{state}<button/>
    <main/>
  )
}
```

// this will now work as intended, as simply changing the variable will not change the state of the component
// instead we use a function given by react to change the state

```js
import {useState} from "react";

export default function App(){
  let [result, setResult] = useState("Yes"); // returns a variable with the argument given and a fucntion
  // so to change the state, we use the function and that re-renders the page
  function handleClick(){
    setResult("Definately");
  }
  
  return (
    <main>
      <h1 classname="">Is it important to learn react<h1/>
      <button onClick={handleClick}>{result}<button/>
    <main/>
  )
}
```
