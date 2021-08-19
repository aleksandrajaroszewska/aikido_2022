import styled from "styled-components";
import footerImage from "../../src/Images/grupowe2.JPG"

export const StyledFooter = styled.footer`
  background-image: url(${footerImage});
  background-position: center;
  background-size: cover;
  height: 700px;
  width: 100%;
  display: flex;
  color: #fdfffc;
  position: relative;
  justify-content: center;
  align-items: flex-end;

  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(28, 26, 26, 0.6);
  }

  .box {
    max-width: 600px;
    width: 100%;
    color: #fdfffc;

    position: relative;
    z-index: 10;
    padding: 10px;
    padding-bottom: 50px;
  }
  h4 {
    color: rgb(236 18 18);
    margin-bottom: 10px;
    font-size: 2.5rem;
  }
  a {
    color: #fdfffc;
    text-decoration: none;
    display: block;
    width: 100%;
    margin-top: 5px;
  }
  a:hover {
    color: #c61111;
  }
  .contact-Box p {
    margin-top: 5px;
  }
  .contact-Box i {
    margin-top: 10px;
    font-size: 3rem;
  }
  .wcaBox .list {
    display: flex;
  }
  .wcaBox .list ul {
    margin-top: 0;
    padding-left: 0;
  }
  .wcaBox .list ul:nth-child(2) {
    padding-left: 20px;
  }
  .wcaBox li {
    list-style-type: none;
    margin-top: 3px;
  }
`;
