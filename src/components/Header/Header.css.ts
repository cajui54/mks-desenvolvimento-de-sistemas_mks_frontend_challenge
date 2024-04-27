import styled from "styled-components";

export const MainHeader = styled.header`
  background-color: var(--secunday-color);
  width: 1440px;
  height: 101px;
  position: relative;

  .buttonCart {
    position: absolute;
    top: 29px;
    right: 88px;
    width: 90px;
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;
  }
  .buttonCart svg {
    color: #000000;
    margin-right: 1rem;
  }
  .buttonCart span {
    color: #000000;
    margin-right: 1rem;
    width: 13px;
    height: 22px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.94px;
  }
`;
export const LogoHeader = styled.div`
  position: relative;
  color: #fff;
  h1 span:first-child {
    width: 128px;
    height: 44px;
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    padding: 10px;
    position: absolute;
    top: 28px;
    left: 65px;
  }
  h1 span:last-child {
    position: absolute;
    top: 45px;
    left: 165px;
    width: 200px;
    height: 44px;
    font-size: 20px;
    line-height: 19px;
    font-weight: 300;
    margin-left: 10px;
  }
`;
