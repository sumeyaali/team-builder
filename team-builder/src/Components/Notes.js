import React from "react";

const Notes = props => {
return (
    <div>
        {props.team.map(member => (
            <div className="member" key={member.id}>
            <p>{member.firstName}</p>
            <p>{member.lastName}</p>
            <p>{member.email}</p>
            <p>{member.location}</p>
            <p>{member.role}</p>



          </div>
        ))}
    </div>
)

}


export default Notes;