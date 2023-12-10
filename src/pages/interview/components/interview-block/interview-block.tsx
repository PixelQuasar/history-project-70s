import {
  BubbleBar,
  BubbleContainer,
  InterviewBlockWrapper,
  InterviewBubbleWrapper,
  InterviewDescription,
  InterviewMainBlock,
  InterviewPhoto,
  InterviewQuestionBlock,
  InterviewSubTitleText,
  InterviewTextBlock,
  InterviewTitleBlock,
  InterviewTitleText,
  TextContainer,
  UndoImage,
  UndoLink,
  UndoLinkWrapper,
} from "./styles.ts";

import imageImports from "../../../../assets/image-imports.ts";
import { useNavigate, useParams } from "react-router-dom";
import { dialogs } from "../../../../assets/text/interview-dialogs.ts";
import { useEffect, useState } from "react";

interface IInterview {
  interviewee_id: string;
  interviewee_name: string;
  interviewee_photo: string;
  interviewee_desc: string;
  interviewee_city: string;
  content: Array<{ interviewee: boolean; text: string }>;
}

export const InterviewBlock = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [interview, setInterview] = useState<undefined | IInterview>(undefined);

  useEffect(() => {
    setInterview(dialogs.find((item) => item.interviewee_id == id));
  }, [id]);

  return (
    <InterviewBlockWrapper>
      <UndoLinkWrapper>
        <UndoLink>
          <UndoImage onClick={() => navigate("/interview")} />
          Назад
        </UndoLink>
      </UndoLinkWrapper>
      {interview && (
        <InterviewTitleBlock>
          <InterviewPhoto
            src={
              Object.keys(imageImports).includes(interview.interviewee_photo)
                ? imageImports[
                    interview.interviewee_photo as keyof typeof imageImports
                  ]
                : "def"
            }
          />
          <InterviewTextBlock>
            <InterviewTitleText>
              {interview.interviewee_name}
            </InterviewTitleText>
            <InterviewSubTitleText>
              {interview.interviewee_city}
            </InterviewSubTitleText>
            <InterviewDescription>
              {interview.interviewee_desc}
            </InterviewDescription>
          </InterviewTextBlock>
        </InterviewTitleBlock>
      )}
      {interview && (
        <InterviewMainBlock>
          <InterviewQuestionBlock>
            <b>Корреспондент:</b> <i>Что?</i>
          </InterviewQuestionBlock>
          <InterviewBubbleWrapper>
            <BubbleContainer>
              <BubbleBar />
              <TextContainer>
                <div>
                  <b>Котенок:</b> <i>lorem ipsum</i>
                </div>
              </TextContainer>
            </BubbleContainer>
          </InterviewBubbleWrapper>

          <InterviewQuestionBlock>
            <b>Корреспондент:</b> <i>Что?</i>
          </InterviewQuestionBlock>
          <InterviewBubbleWrapper>
            <BubbleContainer>
              <BubbleBar />
              <TextContainer>
                <div>
                  <b>Котенок:</b> <i>lorem ipsum</i>
                </div>
              </TextContainer>
            </BubbleContainer>
          </InterviewBubbleWrapper>

          <InterviewQuestionBlock>
            <b>Корреспондент:</b> <i>Что?</i>
          </InterviewQuestionBlock>
          <InterviewBubbleWrapper>
            <BubbleContainer>
              <BubbleBar />
              <TextContainer>
                <div>
                  <b>Котенок:</b> <i>lorem ipsum</i>
                </div>
              </TextContainer>
            </BubbleContainer>
          </InterviewBubbleWrapper>
        </InterviewMainBlock>
      )}
    </InterviewBlockWrapper>
  );
};
