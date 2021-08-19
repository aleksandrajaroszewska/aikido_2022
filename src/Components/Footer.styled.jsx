import styled from "styled-components";
import footerImage from "../../src/Images/grupowe2.JPG";

export const StyledFooter = styled.footer`
  background-image: url(${footerImage});
  background-position: center;
  background-size: cover;
  height: 700px;
  width: 100%;
  display: flex;
  color: #f0f7f4;
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
    background-color: rgba(12, 22, 24, 0.7);
  }

  .box {
    max-width: 600px;
    width: 100%;
    color: #f0f7f4;
    position: relative;
    z-index: 10;
    padding: 10px;
    padding-bottom: 50px;
  }
  h4 {
    color: #d1ac00;
    margin-bottom: 10px;
    font-size: 2.5rem;
  }
  a {
    color: #f0f7f4;
    text-decoration: none;
    display: block;
    width: 100%;
    margin-top: 5px;
  }
  a:hover {
    color: #d1ac00;
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

  @media (max-width: 768px) {
    height: 300px;

    .wcaBox {
      display: none;
    }
  }
`;
