import React from 'react';
import styled from "styled-components";
import Description from './Description'
import Title from './Title'
import Browse from './Browse'

import Button from './Button';

const StyledCard = styled.table`
  
  position:relative;
  border:1px solid #000;
  width:250px;
  height:400px;
`;



const Card = () =>{

    return <StyledCard >
        
        <Title/>&nbsp;
        <Description/>&nbsp;
        <Browse/>
        <Button></Button>
        
        
        
        
        </StyledCard>;
    
    
}



export default Card