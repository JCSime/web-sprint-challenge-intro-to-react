import React from "react";
import styled from "styled-components";

const Character = (props) => {
    return (
        <div>
            <p>Name: {props.data.name}</p>
            <p>Height: {props.data.height}</p>
            <p>Mass: {props.data.mass}</p>
        </div>
    )
}

export default Character;