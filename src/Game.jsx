import { useState } from "react"

function Game() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>
          Hello World.
        </p>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        Clicks: {count}
      </button>
      <br></br>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}

export default Game