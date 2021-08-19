import styled from "styled-components";

export const StyledMain = styled.section`
  @media (max-width: 768px) {
  }
`;



export const StyledParalax = styled.div`
  height:450px;
  max-height:60vh;
  width:100%;
  background-image: url(${props => props.img});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 768px) {
    display:none;
  }
`;
