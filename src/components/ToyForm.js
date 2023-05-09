import React, {useState} from "react";

function ToyForm({addToy}) {

  /**START FORM CODE**/
const initialForm ={
  name: "",
  image: "",
  likes: 0,
}
//form state
const [form, setForm] = useState(initialForm)

//CHANGE event handler
function handleChange(e){
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}

//SUBMIT event handler
function handleSubmit(e){
  e.preventDefault()
//this is where a POST request goes because we want this to PERSIST
  fetch(`http://localhost:3001/toys`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form),
    //why is this argument form and not body like in my notes?
  })
  .then(res => res.json()) //lastly, everything that is collected, please put it into JS we can read 
  .then(data => {
      addToy(data)
      setForm(initialForm)
})
}


/**END FORM CODE**/

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          value={form.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => handleChange(e)}
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
