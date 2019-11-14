import React,{useState} from "react";


const NoteForm = props => {
const [member, setMember] = useState({firstName: "",lastName: "", email: "",location: "", role: ""})

const handleChanges = e => {
    setMember({...member, [e.target.name]: e.target.value});
    console.log(e.target.value);
};

const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({firstName: "",lastName: "",email: "", location: "", role: ""});
};

return (
    <form onSubmit= {submitForm}>
        <label htmlFor="firstName">First Name: </label>
        <input 
        id="firstName"
        type="text"
        name="firstName"
        onChange={handleChanges}
        value={member.firstName}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input 
        id="lastName"
        type="text"
        name="lastName"
        onChange={handleChanges}
        value={member.lastName}
        />
        <label htmlFor="email">email: </label>
        <input 
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
        />
        <label htmlFor="location">Location: </label>
        <input 
        id="location"
        type="text"
        name="location"
        onChange={handleChanges}
        value={member.location}
        /><br />
        
        <select id="role" name="role" onChange={handleChanges} value= {member.role}>   
          <option>Role</option>
          <option>Backend Engineer</option>
          <option>Frontend Engineer</option>
          <option>UX Designer</option>
          <option>Data Scientist</option>
    
        </select>< br />
        <button type="submit">Request to Join!</button>

    </form>
    
    )
}

export default NoteForm;