import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(toys => setToys(toys));
  }, [])


  //ALLOWS US TO TRANSFER NEW TOY IN FORM TO TOY CONTAINER
 const addToy= (toy) => {
  setToys([...toys, toy])
 }


function deleteToy(toy){
  setToys(
    //copy the original array of toys then filter through it
    [...toys].filter(el => {
      //
      return el.id !== toy.id ? true : false
    })
  )
}



  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

 function handleChange(e){
  //update state on form input change
  //user types onchange-> set search state -> display state to user
  setSearch(e.target.value)
 }

//filtered tiys based on state of 'search'
//DO NOT UPDATE ORIGINAL TOYS STATE, so when backspacing toys come back
const filteredToys= [...toys].filter(el => {
  //does el (toy) contain the string search? (must return true or false)
  //1. convert both el.name and search to lowercase
  //2. check if el.name contains search substring
  return el.name.toLowerCase().includes(search.toLowerCase())
})


  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {/**filter form */}
      <div className="container">
        <form className="add-toy-form">
          <input className="input-text" placeholder="Search..." value={search} onChange={e => handleChange(e)}/>
        </form>
      </div>
      <ToyContainer  toys={filteredToys} deleteToy={deleteToy}/>
    </>
  );
}

export default App;

// make toy form

//When the ToyForm is submitted, 

// make a POST request to /toys to 
// save a new toy to the server. 

// Using the ideas of controlled form 
// render a new ToyCard
















// When our application loads, make a 
// GET request to /toys to fetch the 
// toy array. 


//Given your component tree, 
// think about which component should be 
// responsible for the array. After you 
// have put the data in the proper component, 
// your next job is to render the ToyCard 
// components on the page.




// function handleDelete(toy){
//   fetch("http://localhost:3001/toys/:id", {
//     method: 'DELETE'
//   })
//   .then(res => res.json())
//   const toyFilter = [...toys].filter(el => {
//     // if el.id does not equal task.text then
//       //it will return true, which means we will
//       //want to keep it in the array
//     return el.id !== toy.id
//   })
//   setToys(toyFilter)
// }








// let filterToys= [...toys].filter(el => {
//   return el.id === selectedToy || selectedToy === 1
// })




// When the Donate to Goodwill button is clicked,
//  make a DELETE request to /toys/:id with the 
//  ID of the toy that was clicked to delete the 
//  toy from the server. The ToyCard that you 
//  clicked on should also be removed from the DOM.