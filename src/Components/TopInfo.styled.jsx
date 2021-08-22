import styled from "styled-components";

import topInfoImage from "../../src/assets/top.jpg";

export const StyledTopInfo = styled.section`
  background-image: url(${topInfoImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  position: relative;
  padding: 0;
  margin-top: 0;
  display: flex;
  justify-content: center;

  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(12, 22, 24, 0.7);
  }

  .welcome {
    position: absolute;
    top: 20vh;
    width: 100%;
    z-index: 50;
  }

  .welcome h1 {
    font-family: "Montserrat", sans-serif;
    color: #F0F7F4;
    text-align: center;
    margin-bottom: 0;
    font-size: 15rem;
    margin:0;

  }
  .welcome span {
    font-size: 4rem;
    line-height: 4rem;
  }

  .training-plan {
    font-family: "Montserrat", sans-serif;
    margin-top: 40px;
    width: 100%;
    color: #F0F7F4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .training-plan h3,
  .training-plan h2 {
    margin: 5px 0;
  }
  .training-plan h3 span {
    font-size: 2.5rem;
  }
  .training-plan h2 {
    margin-bottom: 15px;
    color: #D1AC00;
    text-transform: uppercase;
    text-align: center;
  }
  .training-plan a {
    color: #D1AC00;
    margin-top: 20px;
    text-decoration: none;
    text-align: center;
  }
  .training-plan h4 {
    font-size: 3.3rem;
    text-transform: uppercase;
    margin-top: 20px;
  }
  .training-plan a:hover {
    color: #F0F7F4;
  }


  .logo {
    position: absolute;
    bottom: 60px;
    right: 60px;
  }

  @media (max-width: 768px) {
    background-attachment: unset;

    .welcome {
      top: 30vh;
    }
    .welcome h1 {
      font-size: 5rem;
 
    }
    .welcome span {
      font-size: 2rem;
      line-height: 3rem;
    }
    .training-plan {
      margin-top: 30px;
    }
    .training-plan h3,
    .training-plan h2 {
      font-size: 2rem;
    }
    .training-plan h3 span {
      font-size: 1.4rem;
    }
    .training-plan h4,
    .training-plan a {
      font-size: 1.4rem;
      margin-top: 10px;
    }

    .logo {
      bottom: 20px;
      right: 20px;
    }
    a img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const StyledDojoIframe = styled.section`

  iframe {
    width: 100%;
    height: 40vh;
  }
`;
