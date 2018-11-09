import styled from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgba(245, 238, 252, 0.9);
  padding: 10px 0;
  position: fixed;
  width: 100%;
  max-width: 1800px;
  // border-bottom: 0.5px solid rgb(116, 115, 115);
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StyledNavItem = styled.p`
  width: 8%;
  min-width: 115px;
  text-align: center;
  color: white;
  color: #333;
  padding: 5px 0;
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 15px;
  transition: 0.2s;

  :hover {
    background-color: rgba(255, 255, 240, 0.9);
    background-color: #bbb;
    background-color: white;
    color: #222222;
    // color: ivory;
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 700px) {
    width: 100%;
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
    // margin-right: -10%;
  }
`;

export const LandingPageText = styled.h1`
  .text {
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Dancing Script', cursive;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 12.8rem;
    width: 60%;
    text-align: center;
    color: white;
    line-height: 105%;
    text-shadow: 2px 2px 5px rgb(0, 0, 0), -1px -1px 5px rgb(0, 0, 0);

    p {
      font-size: 8rem;
      width: 90%;
    }

    @media (max-width: 700px) {
      width: 100%;

      p {
        font-size: 5rem;
        width: 90%;
        line-height: 125%;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
`;

export const OurStory = styled.p`
  width: 80%;
  margin: 20px auto;
  font-size: 3rem;
  text-align: center;
  background-color: ivory;
  padding: 50px 0;
  line-height: 125%;
  box-shadow: 0px 4px 10px rgb(0, 0, 0);
  border-radius: 15px;

  @media (max-width: 700px) {
    width: 100%;
    margin: 10px auto;
  }

  p {
    font-size: 2rem;
    padding: 4px 2%;
    text-align: left;
  }
`;

export const Accommodations = styled.div`
  text-align: center;
  font-size: 5rem;
  padding: 100px 0 70px 0;
  background-color: white;
`;
