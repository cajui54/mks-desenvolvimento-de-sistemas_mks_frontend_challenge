import styled from "styled-components";

export const MainItem = styled.div`
  width: 217.56px;
  height: 285px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
  margin-right: 1.5rem;
  position: relative;
  img {
    width: 111px;
    height: 138px;
    margin: 18px 53px;
  }
  p {
    width: 192px;
    height: 25px;
    overflow: hidden;
    margin: 0.5rem auto;
    font-weight: 300;
    font-size: 1rem;
    line-height: 12px;
    padding: 1px;
    color: #2c2c2c;
  }
  button {
    background-color: var(--secunday-color);
    width: 218px;
    height: 31.91px;
    border-radius: 0px 0px 8px 8px;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  button svg {
    width: 12px;
    height: 13.5px;
    margin-right: 7px;
  }
  button span {
    width: 77px;
    height: 14px;
    font-weight: 600;
    font-size: 14px;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  h2 {
    width: 124px;
    height: 38px;
    margin: 0.5rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 1px;
  }
  div {
    background-color: #373737;
    min-width: 64px;
    height: 26px;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    padding: 1px;
    color: #fff;
  }
`;
