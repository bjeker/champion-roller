import { useState } from "react"

function Game() {
  const [count, setCount] = useState(0)
  const [roll, setRoll] = useState(0)

  const champions = [
    { title: 'Jinx', id: 1},
    { title: 'Jhin', id: 2},
  ]

  const listChampions = champions.map(champion =>
    <li key={champion.id}>
      {champion.title}
    </li>
  )

  const [randChamp, setRandChamp] = useState(null)
  
  let random = Math.floor(Math.random() * listChampions.length)

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
      <br></br>
      <ul>{listChampions}</ul>
      <button onClick={() => {
        setRandChamp(champions[random].title);
        setRoll((roll) => roll + 1);
      }}>
        Random Champion: {randChamp} Rolls: {roll}
      </button>
    </>
  )
}

export default Game