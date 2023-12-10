import styled from "styled-components";
import { staticTheme } from "../../../../styles/theme.ts";

export const InterviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InterviewListTitle = styled.div`
  display: flex;
`;

export const InterviewListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 16px;
`;

export const InterviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const BlockTitle = styled.div`
  display: flex;
  font-size: 2em;
  font-weight: bold;
`;

export const BlockImage = styled.div<{ src: string }>`
  display: flex;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  width: 100%;
  height: 50%;
`;

export const BlockDescription = styled.div`
  display: flex;
`;

export const BlockLink = styled.div`
  display: flex;
  background-color: ${staticTheme.ayy4.red};
  padding: 16px;
  color: #ffffff;
  border-radius: 16px;
`;
