import styled from "styled-components";

export const MainHeader = styled.header`
  background-color: var(--secunday-color);
  width: 100%;
  height: 101px;
  position: relative;

  .buttonCart {
    position: absolute;
    left: 1062px;
    top: 29px;
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
  width: 128px;
  height: 44px;
  position: relative;
  top: 28px;
  left: 65px;
  color: #fff;
  h1 span:first-child {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    padding: 10px;
  }
  h1 span:last-child {
    width: 200px;
    height: 44px;
    font-size: 20px;
    line-height: 19px;
    font-weight: 200;
    padding: 10px;
  }
`;
