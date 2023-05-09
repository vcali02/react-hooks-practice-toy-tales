import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  //populates all of the db.json toys in state
  const [toys, setToys] = useState([])




//GET populates data from db.json
useEffect(() => {
  fetch("http://localhost:3001/toys")
  .then(res => res.json())
  .then(toys => setToys(toys))
}, [])

//copying the original object, and adding a new element
const addToy = (toy) => {
  setToys(
    [...toys, toy]
  )
}





  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
