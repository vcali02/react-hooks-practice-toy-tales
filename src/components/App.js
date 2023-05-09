import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])


useEffect(() => {
  fetch("http://localhost:3001/toys")
  .then(res => res.json())
  .then(toys => setToys(toys))
}, [])



  function handleClick() {
    setShowForm((showForm) => !showForm);
  }



  const addToy = (toy) => {
    setToys([
      ...toys, toy
    ])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;



// When our application loads, make a GET request
// to /toys to fetch the toy array. 
//useState and useEffect

// is to render the ToyCard components on the page.