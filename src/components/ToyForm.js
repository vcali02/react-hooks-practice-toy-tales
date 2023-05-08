import React, {useState} from "react";

function ToyForm({addToy}) {

const initialForm = {
  image: "",
  likes: 0,
  name: ""
}

const [form, setForm] = useState(initialForm)


const handleChange = (e) => {
  setForm({
    ...form,
    //why is key in brackets and not value?
    //to ensure if key names have spaces or punctuation it can be "counted" bc of the []
    [e.target.name] : e.target.value
    //need name bc will stay the same (so need the reference), and need value bc it will change 

  })
}
  
/**
 * 1. make state for form values
 * 2. add state values as values in individual inputs
 * 3. create onchange to update state on input change
 * 4. onsubmit- POST 
 */

const handleSubmit = (e) => {
  e.preventDefault()

  fetch("http://localhost:3001/toys", {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'content-type' : 'application/json'
    }
  })
  .then (res => res.json())
  .then(data => {
    //show new toy on the page
    addToy(data) //use data so we can also save new id
    setForm(initialForm) //only put in here upon successful POST
  })
}






  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={e => handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          value={form.name}
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={form.image}
          onChange={(e) => handleChange(e)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

  //each input needs its own state in order for EACH to be changed
  //in the moment
  // const [name, setName] = useState("")
  // const [image, setImage] = useState("")

// //each input needs their OWN change event, putting them in onw
// //causes bugs
// const handleNameChange = (e) => {
//   setName(e.target.value)
  
// }
// //we UPDATE the value, aka change the value, with the state function
// //that is SPECIFICALLY designed to UPDATE the value of the state
// //we use e.target and the value of the input field so that the form
// //takes in ANY of the information typed in
// const handleImageChange = (e) => {
//   setImage(e.target.value)
// }

// //one handle submit is sufficient
// const handleSubmit = (e) => {
//   e.preventDefault()
//   addNewToy({name, image})
// }

// //this is the NEW OBJECT that is created BY THE STATE VARIABLES
// //this lives independent of all other instructions
// const formData ={
//   name,
//   image
// }
// console.log(formData)