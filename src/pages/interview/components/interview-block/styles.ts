import styled from "styled-components";
import { staticTheme } from "../../../../styles/theme.ts";

export const InterviewBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding-bottom: 128px;
`;

export const InterviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InterviewTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 60%;
`;

export const InterviewTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

export const InterviewTitleText = styled.div`
  font-family: "Courier New";
  font-size: 2em;
`;

export const InterviewSubTitleText = styled.div`
  font-family: "Courier New";
  font-size: 1em;
  font-style: italic;
  color: ${staticTheme.ayy4.darkPale};
  opacity: 0.7;
`;

export const InterviewDescription = styled.div`
  color: ${staticTheme.ayy4.darkPale};
  margin-top: 32px;
`;

export const InterviewMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;
`;

export const InterviewQuestionBlock = styled.div`
  margin-top: 64px;
  font-family: "Courier New";
`;

export const InterviewBubbleWrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  font-family: "Courier New";
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const InterviewBubbleHeader = styled.div`
  display: flex;
`;

export const interviewBubbleTitle = styled.div`
  font-size: 1.5em;
  font-family: "Courier New";
  font-weight: bold;
`;

export const interviewBubbleContent = styled.div`
  font-style: italic;
`;

export const InterviewPhoto = styled.div<{ src: string }>`
  background-image: url("${(props) => props.src}");
  width: 256px;
  height: 256px;
  background-position: center;
  background-size: cover;
`;
