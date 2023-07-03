import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
import NewHeader from "./NewHeader"

const App = () => {
  const people = [
    { name: "Paul", sex: "Not Today" },
    { name: "Don", sex: "Not Gay" },
    {
      name: "SUltra",
      salty: { categories: ["very salty", "meow", "poop"] },
    },
  ]

  const defaultState = {
    counter: 0,
    cat: "green",
    tom: true,
    sort: "ascending",
    city: "Tampa",
  }
  const [state, setNewState] = useState(defaultState)
  const setState = (newState) => setNewState({ ...state, ...newState })
  const { counter, cat, sort, city, paul } = state
  return (
    <div className="App">
      <header className="App-header">
        {/* {people[2].salty.categories.map((category) => {
          return <h2>{category}</h2>
        })} */}
        <NewHeader color={cat} header="CAT" />

        <h2>{sort}</h2>
        <h2>{city}</h2>
        <h1>
          Counter: {counter}, Cat is: {cat}
        </h1>
        <button onClick={() => setState({ counter: counter + 1 })}>
          Increase +
        </button>

        <button onClick={() => setState({ counter: counter - 1 })}>
          Decrease
        </button>

        <button onClick={() => setState({ cat: "red" })}>
          Change Cat Color to Red
        </button>
        <button onClick={() => setState({ city: "Orlando" })}>
          Change City to Orlando
        </button>

        <button onClick={() => setState(defaultState)}>Reset</button>
      </header>
    </div>
  )
}

export default App
