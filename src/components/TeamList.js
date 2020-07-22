import React from 'react';
import TeamDetails from './TeamDetails';

function TeamList(props) {
    console.log(props)
    const { teamData } = props
    return (
        teamData.map((tm, i) => {
            return(
                <div>
                    <h1>Name: {tm.name}</h1>
                    
                    <TeamDetails key = {i} teamData = {teamData} />
                </div>
            )
        })
        
    )
}
export default TeamList;