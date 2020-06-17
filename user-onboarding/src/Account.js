import React from 'react'

export default function Account(props){
    return(
        <div>
            <p>Username: {props.details.username}</p>
            <p>Email: {props.details.email}</p>
        </div>
    )
}