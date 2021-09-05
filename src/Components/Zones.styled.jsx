import styled from "styled-components";

export const StyledZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0c1618;
  color: #f0f7f4;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  &.instructors {
    img {
      max-width: 400px;
    }
  }
  &.dojo,
  &.prices {
    .textBox {
      width: 100%;
    }
  }
`;

export const StyledZoneRow = styled.div`
  padding: 50px 30px;
  width: 100%;
  display: flex;
  justify-content: center;

  .textBox {
    width: 50%;
    padding: 0 40px;
  }
  .textBox h3 {
    margin: 0;
    margin-bottom: 20px;
    color: #d1ac00;
  }

  .textBox p {
    margin: 0;
    line-height: 26px;
    margin-top: 10px;
  }

  .textBox span {
    display: block;
    margin-top: 10px;
    opacity: 0.7;
  }
  .textBox .spaceless {
    margin-top: 0;
    margin-bottom: 0;
  }

  .image-gallery {
    width: 50%;
    max-width: 50%;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:focus {
    border: 3px solid #d1ac00;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    border-top: 1px solid #7e8d85;
    .image-gallery {
      width: 100%;
      max-width: 100%;
      margin: 10px 0;
    }
    .textBox {
      width: 100%;
      padding: 10px 0;
    }
    .textBox h3 {
      font-size: 2rem;
    }
  }
`;

export const StyledPrices = styled.div`
  width: 100%;
  display: flex;
  > div {
    border: 1px solid #7e8d85;
    margin: 20px 20px 20px 0;
    width: 100%;
    padding: 10px 20px 20px 20px;
    /* text-align: center; */
  }
  h4 {
    color: #d1ac00;
    margin: 10px 0;
  }
  .family {
    p {
      display: flex;
      align-items: baseline;
      h4 {
        margin: 0 4px 0 0;
      }
    }
  }

  a {
    color: #7e8d85;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
