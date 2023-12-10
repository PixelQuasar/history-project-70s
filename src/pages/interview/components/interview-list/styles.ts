import styled from "styled-components";
import { staticTheme } from "../../../../styles/theme.ts";

export const InterviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const InterviewListTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Courier New";
  margin-top: 128px;
  opacity: 0.6;
  font-weight: bold;
  font-style: italic;
  font-size: 2em;
  width: 60%;
  text-align: center;
`;

export const InterviewListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 96px 64px;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 256px;
`;

export const BorderLine = styled.div`
  height: 2px;
  border-radius: 2px;
  width: 800px;
  margin: 64px;
  background-color: ${staticTheme.ayy4.dark};
  opacity: 0.7;
`;

export const InterviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  border-radius: 16px;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  width: 250px;
  height: 500px;
`;

export const BlockTitle = styled.div`
  display: flex;
  font-size: 1em;
  font-weight: bold;
  font-family: "Courier New";
`;

export const BlockImage = styled.div<{ src: string }>`
  display: flex;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

export const BlockDescription = styled.div`
  display: flex;
  font-family: "Courier New";
  font-style: italic;
`;

export const BlockLink = styled.div`
  display: flex;
  background-color: ${staticTheme.ayy4.red};
  padding: 12px;
  color: #ffffff;
  border-radius: 16px;
  font-family: "Courier New";
  font-weight: bold;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.4s all;
  width: 90%;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
