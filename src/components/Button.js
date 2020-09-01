import React from "react";
import styled from "styled-components";

const StyledBut = styled.text`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const Button = () => {
  return (
    <StyledBut>
      <button type="submit">Send</button>
    </StyledBut>
  );
};

export default Button;
