import { Fragment } from "react";
import Header from "./components/header";
import Card from "./components/cards";
import data from "./data";

export default function App() {
  return (
    <Fragment>
      <Header />
      {data.map((item) => {
        return <Card key={item.id} {...item} />
      })}
    </Fragment>
  )
}
