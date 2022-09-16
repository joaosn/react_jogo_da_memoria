import styled from "styled-components";

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: flex;
  padding: 50px 0;
  font-family: "Courier New", Courier, monospace;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const InfoText = styled.div`
  font-size: 15px;
`;

export const LogoLink = styled.a`
  font-size: 15px;
`;

export const infoArea = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 750px) {
    justify-content: center;
    margin: 0 20px;
  }
`;
