import React, {useState} from "react";
import axios from "axios";

function CreateNote() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })
    function handleChange(event) {
        const {name, value} = event.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event){
        event.preventDefault();
        // console.log(input)
        const newNote = {
            title: input.title,
            content: input.content
        }

        axios.post('http://localhost:3001/create', newNote)

        setInput({
            title: '',
            content: ''
        })
    }

  return (
    <div>
      <h1>Create Note Page</h1>
      <form>
        <div className="form-group my-2">
          <input onChange={handleChange} name="title" value={input.title} autoComplete="off" placeholder="Title" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <textarea value={input.content} onChange={handleChange} name="content" autoComplete="off"
            placeholder="Description"
            className="form-control"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-info text-white mt-2">Add Note</button>
      </form>
    </div>
  );
}

export default CreateNote;
