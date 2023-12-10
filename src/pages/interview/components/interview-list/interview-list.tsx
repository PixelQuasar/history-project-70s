import {
  BlockDescription,
  BlockImage,
  BlockLink,
  BlockTitle,
  BorderLine,
  InterviewBlock,
  InterviewListContainer,
  InterviewListTitle,
  InterviewListWrapper,
} from "./styles.ts";
import { dialogs } from "../../../../assets/text/interview-dialogs.ts";
import imageImports from "../../../../assets/image-imports.ts";
import Navbar from "../../../../components/navbar";

export const InterviewList = () => {
  return (
    <InterviewListWrapper>
      <Navbar />
      <InterviewListTitle>
        Мы провели исследование и взяли интервью у "последнего поколения СССР".
        Здесь вы можете ознакомиться с записями!
      </InterviewListTitle>
      x
      <BorderLine />
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
