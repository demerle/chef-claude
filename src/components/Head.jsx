import React from "react"
import avatar from "../assets/user.png"

export default function Head(props) {

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}