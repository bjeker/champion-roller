import { useState } from "react"
import jinxImage from 'src/assets/jinx.jpg';
import jhinImage from 'src/assets/jhin.jpg';

function Game() {
  const [roll, setRoll] = useState(0)
  const [randChamp, setRandChamp] = useState(0)

  const champions = [
    { title: 'Jinx', id: 1, img: jinxImage},
    { title: 'Jhin', id: 2, img: jhinImage}
  ]

  let listChampions = champions.map(champion =>
    <li key={champion.id}>
      {champion.title}
    </li>
  )
  
  const random = Math.floor(Math.random() * listChampions.length)

  return (
    <>
      <div>
        <h1>
          League of Legends Random Champion Roller
        </h1>
        <p>
          Roll for a random champion to play.
        </p>
        <ul>{listChampions}</ul>
      </div>
      <div>
        <button onClick={() => {
          setRandChamp(random);
          setRoll((roll) => roll + 1);
        }}>
          Random Champion: {champions[randChamp].title} Rolls: {roll}
        </button>
        <br></br>
        <button onClick={() => {
          setRandChamp(0)
          setRoll(0);
        }}>
          Reset Champion Rolls
        </button>
        <br></br>
        <div className="championImage">
          <img src={champions[randChamp].img} alt={champions[randChamp].title}/>
        </div>
      </div>
    </>
  )
}

export default Game