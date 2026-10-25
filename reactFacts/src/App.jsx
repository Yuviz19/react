import { Fragment } from "react";

function Header() {
  return (
    <header className="header">
      <img src="/src/assets/react-logo.png" alt="" width="40px" />
      <h1>ReactFacts</h1>
    </header>
  )
}

function Title() {
  return (
    <h1 className="mainTitle">Fun Facts about React</h1>
  )
}

function List() {
  return (
    <ul>
      <li>Was created in 2013</li>
      <li>Orginially created by Jordan Walke</li>
      <li>Has well over 100k stars on github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps</li>
    </ul>
  )
}

function Image() {
  return (
    <img src="/src/assets/react-logo-half.png"></img>
  )
}

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main className="mainContainer">
        <Title></Title>
        <article>
          <List></List>
          <Image></Image>
        </article>
      </main>
    </Fragment>
  );
}

export default App;
