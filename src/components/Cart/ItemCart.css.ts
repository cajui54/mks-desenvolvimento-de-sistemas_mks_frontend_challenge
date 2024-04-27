import styled from "styled-components";

export const ItemCartMain = styled.div`
  width: 80%;
  margin: 5rem auto;
`;
export const CardItem = styled.div`
  position: relative;
  background-color: #fff;
  width: 379px;
  height: 95px;
  margin-top: 2.8rem;
  border-radius: 0.8rem;
  box-shadow: -2px 2px 10px 0px #0000000d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 46px;
    height: 57px;
    margin-left: 22px;
  }
  h2 {
    width: 113px;
    height: 33px;
    margin-left: 1rem;
    font-size: 13px;
    font-weight: 400;
    padding: 1px;
    color: #2c2c2c;
  }
  .button-close {
    width: 18px;
    height: 18px;
    background-color: #000000;
    color: #fff;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: -0.6rem;
    right: -0.5rem;
    cursor: pointer;
  }
`;
export const InputContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 19px;
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  p {
    width: 11px;
    height: 6px;
    font-size: 5px;
    line-height: 6.1px;
    color: #000000;
  }
  div input {
    width: 34px;
    height: 15px;
    color: #000000;
    border: none;
    text-align: center;
    outline: none;
    font-size: 8px;
    font-weight: 400;
    line-height: 9.75px;
  }
  div button {
    background-color: #fff;
    position: absolute;
    border: none;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  div button:first-child {
    left: 0;
    border-right: 0.2px solid #bfbfbf;
  }
  div button:last-child {
    right: 0;
    border-left: 0.2px solid #bfbfbf;
  }
`;
export const PriceContainer = styled.div`
  width: 62px;
  height: 17px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 1px;
`;
