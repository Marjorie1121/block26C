import React, { useState } from "react";

const Form = ({addPlayer}) => {
    const [form, setForm] = useState({
        name: "",
        breed: "",
        imageUrl: "",
        status: "",
        teamId: ""
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newPlayer = {
            name: form.name,
            breed: form.breed,
            imageUrl: form.imageUrl,
            status: form.status,
            teamId: form.teamId
        };
        addPlayer(newPlayer);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} />
                <label>Breed</label>
                <input type="text" name="breed" onChange={handleChange} />
                <label>Image URL</label>
                <input type="text" name="imageUrl" onChange={handleChange} />
                <label>Status</label>
                <input type="text" name="status" onChange={handleChange} />
                <label>Team ID</label>
                <input type="text" name="teamId" onChange={handleChange} />
                <button>Add Player</button>
            </form>
        </div>
    )
}

export default Form