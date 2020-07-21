import React from 'react';

function TeamDetails(props) {
const {teamData} = props
console.log("PROPS", props)
    return(
        
        <p>Email: {teamData.email}</p>
    )
}
export default TeamDetails;