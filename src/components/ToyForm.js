import React, {useState} from "react";

function ToyForm({addToy}) {
  
  const initialForm = {
    name: "",
    image: "",
    likes: 0
  }
const [form, setForm] = useState(initialForm)


function handleChange(e){
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}


function handleSubmit(e){
  e.preventDefault()
  fetch("http://localhost:3001/toys", {
    method: "POST",
    body: JSON.stringify({...form}),
    headers: {
      "content-type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    addToy(data)
    setForm(initialForm)
  })

}


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          value= {form.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e)=> handleChange(e)}
        />
        <br />
        <input
          value= {form.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e)=> handleChange(e)}
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



// When the ToyForm is submitted, make a POST request to
//  /toys to save a new toy to the server. Using the ideas 
//  of controlled form and inverse data flow, think about 
//  how to render a new ToyCard for the toy that you created.