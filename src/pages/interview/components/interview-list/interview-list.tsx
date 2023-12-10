import {
  BlockDescription,
  BlockImage,
  BlockLink,
  BlockTitle,
  InterviewBlock,
  InterviewListContainer,
  InterviewListTitle,
  InterviewListWrapper,
} from "./styles.ts";
import { dialogs } from "../../../../assets/text/interview-dialogs.ts";
import imageImports from "../../../../assets/image-imports.ts";

export const InterviewList = () => {
  return (
    <InterviewListWrapper>
      <InterviewListTitle></InterviewListTitle>
      <InterviewListContainer>
        {dialogs.map((item) => (
          <InterviewBlock>
            <BlockImage
              src={
                imageImports[
                  item.interviewee_photo as keyof typeof imageImports
                ]
              }
            />
            <BlockTitle> {item.interviewee_name} </BlockTitle>
            <BlockDescription> {item.interviewee_desc} </BlockDescription>
            <BlockLink> перейти... </BlockLink>
          </InterviewBlock>
        ))}
      </InterviewListContainer>
    </InterviewListWrapper>
  );
};
