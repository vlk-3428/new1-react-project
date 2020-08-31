import React,{ useState } from 'react';
import styled from "styled-components";


const StyledBut = styled.text`

    position:absolute;
    bottom:5px;
    right:5px;
`;

const Button = () =>{

    return <StyledBut >
        
        <button type="button" >Send</button>
        </StyledBut>;
    
    
}



export default Button