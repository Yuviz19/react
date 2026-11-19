import { useState } from "react"

export default function GoingOut() {
  const [isGoingOut, useGoindOut] = useState(true);
  function handleClick() {
    useGoindOut(preGoingOut =>
      !preGoingOut
    )
  }

  return (
    <main>
      <h1>Do you feel going out tonight?</h1>
      <button onClick={handleClick}>{ isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}
