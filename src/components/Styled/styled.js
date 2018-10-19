import styled from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgba(2, 2, 2, 0.205);
  padding: 10px 0;
  position: fixed;
  width: 100%;
  max-width: 1800px;

  @media (max-width: 700px) {
  }
`;

export const StyledNavItem = styled.p`
  width: 8%;
  min-width: 115px;
  text-align: center;
  color: white;
  // color: #333;
  padding: 5px 0;
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 15px;
  transition: 0.2s;

  :hover {
    background-color: rgba(255, 255, 255, 0.61);
    color: #222222;
  }
`;

export const Jumbotron = styled.div`
  background-image: url('https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022079630139/media/44106077440/large/1538437217/enhance');
  height: 100vh;
  background-size: cover;
  background-position: top right;
  // background-attachment: fixed;
  margin-right: 0;

  @media (max-width: 700px) {
    margin-right: -10%;
  }
`;

export const LandingPageText = styled.h1`
  display: flex;
  font-family: 'Dancing Script', cursive;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 12.8rem;
  width: 60%;
  text-align: center;
  color: white;
  height: 100vh;
  line-height: 175%;
  text-shadow: 0px 0px 10px rgb(0, 0, 0);

  @media (max-width: 700px) {
    width: 100%;
    line-height: 125%;
    align-items: flex-end;
  }
`;