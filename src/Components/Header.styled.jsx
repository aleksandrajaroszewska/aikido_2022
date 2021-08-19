import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #0C1618;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;

  nav {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav .homepage-link {
    height: 100%;
    padding: 5px 30px;
  }
  nav img {
    height: 100%;
  }
  nav .buttons {
    display: flex;
    margin-right: 30px;
    cursor: pointer;
    height: 100%;
    align-items: center;
  }
  nav .btn {
    color: #F0F7F4;
    
    font-weight: 600;
    padding: 10px;
    list-style-type: none;
    margin-right: 10px;
    text-transform: uppercase;
    padding-bottom: 5px;
  }
  nav .btn:hover {
    color: #D1AC00;
  }

  @media (max-width: 768px) {
    height: 50px;

    nav .homepage-link {
      display: none;
    }
    nav .buttons {
      margin-right: 0;
      width: 100%;
      justify-content: center;
    }
    nav .btn {
      font-size: 13px;
      padding: 15px 5px;
      margin-right: 3px;
    }
    nav {
      overflow-y: scroll;
    }
  }
`;
