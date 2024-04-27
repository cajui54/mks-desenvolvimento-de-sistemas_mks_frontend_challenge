import styled from "styled-components";

export const MainCart = styled.div`
  background-color: var(--secunday-color);
  position: absolute;
  z-index: 2;
  width: 486px;
  height: 1024px;
  right: 0;
  box-shadow: -5px 0px 6px 0px #00000021;
`;
export const Container = styled.div`
  position: relative;
  height: 100%;
`;
export const HeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    width: 180px;
    height: 56px;
    margin-top: 36px;
    margin-left: 47px;
    font-weight: 700;
    font-size: 27px;
    line-height: 32.91px;
    color: #fff;
  }
  button {
    border: none;
    cursor: pointer;
    width: 38px;
    height: 38px;
    position: relative;
    top: 39px;
    right: 22px;
    background: #000000;
    border-radius: 50%;
  }
  button svg {
    color: #fff;
    font-size: 28px;
    line-height: 15px;
  }
`;
export const TotalCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  div {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  div span {
    color: #fff;
    width: 80px;
    height: 15px;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    padding: 1px;
  }
  button {
    background-color: #000000;
    width: 486px;
    color: #fff;
    height: 97px;
    border: none;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    padding: 1px;
    cursor: pointer;
  }
`;
