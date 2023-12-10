import styled from "styled-components";

export const ContactCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 256px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 4em;
  text-align: center;
  margin: 32px;
  width: 1000px;
  font-family: "Courier New";
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ContactBlock = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 300px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Name = styled.div`
  display: flex;
  font-family: "Courier New";
  font-size: 1em;
  font-weight: normal;
`;

export const Portrait = styled.div<{ src: string }>`
  display: flex;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  width: 64px;
  height: 64px;
  border-radius: 64px;
`;
