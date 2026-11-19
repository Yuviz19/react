import { useState } from "react"

export default function FavThings() {
  const [myFavThings, setMyFavThings] = useState([]);
  const allFavThings = [
    "Music",
    "Football",
    "Food",
    "Nature",
    "Programming"
  ];
  const thingsElement = myFavThings.map(thing => <p key={thing}>{ thing }</p>)

  function addFavThings() {
    setMyFavThings((prevMyFavs => [...prevMyFavs, allFavThings[prevMyFavs.length]]))
  }

  return (
    <main>
      <button onClick={addFavThings}>Add Item</button>
      <section>{ thingsElement }</section>
    </main>
  )
}
