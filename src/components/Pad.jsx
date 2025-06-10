import React from 'react';
export default function Pad(props) {

    const styles = {
        backgroundColor : props.color
    }

    return (
        <button
            style={styles}
            key={props.id}
            className={props.on ? "on" : null}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}