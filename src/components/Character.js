import React from 'react';
import styled from 'styled-components';


const StylePoints = styled.div`
    color: #191970;
    width: 35%;
    height: 30vh;
    /* text-align: center; */
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 35%;
    margin-bottom: 2%;
    padding: 2%;
    background-color: #D3D3D3;
    border-radius: 5%;
    border: 1px solid #000;


    h1 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1rem;
    }
`

export default function Character(props) {
    const { data} = props
    
    return (
        <StylePoints>
            <h1>{data.name}:</h1>
            <div>
                <h3>Birth year: {data.birth_year}</h3>
                <h3>Sex: {data.gender}</h3>
                <h3>Height: {data.height}</h3>
            </div>
        </StylePoints>
    )
}
