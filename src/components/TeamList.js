import React from 'react';

function TeamList(props) {
    console.log(props)
    const { teamData } = props
     if (!teamData) {
         return <h3>Fetching team data...</h3>
     }
    return (
        teamData.map((tm, i) => {
            return(
                <div>
                    <h1>Name: {tm.name}</h1>
                    <p>email: {tm.email}</p>
                </div>
            )
        })
        
    )
}
export default TeamList;