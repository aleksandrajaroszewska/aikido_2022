import styled from "styled-components";

import topInfoImage from "../../src/Images/top.jpg";

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
    background-color: rgba(28, 26, 26, 0.5);
  }

  .welcome {
    position: absolute;
    top: 15vh;
    width: 100%;
    z-index: 50;
  }

  .welcome h1 {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    text-align: center;
    margin-bottom: 0;
    font-size: 15rem;
    line-height: 16rem;
  }
  .welcome span {
    font-size: 4rem;
    line-height: 4rem;
  }

  .training-plan {
    font-family: "Montserrat", sans-serif;
    margin-top: 40px;
    width: 100%;
    color: #fdfffc;
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
    color: #c61111;
    text-transform: uppercase;
    text-align: center;
  }
  .training-plan a {
    color: #c61111;
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
    color: white;
  }

  .arrow-box {
    width: 80px;
    height: 80px;
    background-color: #262424;
    color: #fdfffc;
    border-radius: 50px;
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 80;
    display: none;
  }
  .fa-arrow-down:hover {
    opacity: 0.8;
    transform: scale(0.9);
  }
  .arrow-box .fa-arrow-down {
    font-size: 4rem;
  }

   .logo {
    position: absolute;
    bottom: 60px;
    right: 60px;
  }

  @media (max-width: 768px) {
    background-attachment: unset;

    .welcome {
      top: 35vh;
    }
    .welcome h1 {
      font-size: 4rem;
      line-height: 2rem;
    }
    .welcome span {
      font-size: 2rem;
      line-height: 3rem;
    }
    .arrow-box {
      display: none;
    }
    .training-plan {
      margin-top: 30px;
    }
    .training-plan h3,
    .training-plan h2 {
      font-size: 1.6rem;
      line-height: 1.6rem;
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
