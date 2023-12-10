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
  UndoLinkWrapper,
} from "./styles.ts";

import imageImports from "../../../../assets/image-imports.ts";

export const InterviewBlock = () => {
  return (
    <InterviewBlockWrapper>
      <UndoLinkWrapper>
        <UndoImage />
        Назад
      </UndoLinkWrapper>
      <InterviewTitleBlock>
        <InterviewPhoto src={imageImports["kitten.jpeg"]} />
        <InterviewTextBlock>
          <InterviewTitleText>Котенок</InterviewTitleText>
          <InterviewSubTitleText>
            Просто маленький котенок
          </InterviewSubTitleText>
          <InterviewDescription>
            Описание описание описание описание описание описание описание
            описание описание описание описание описание описание описание
            описание описание описание
          </InterviewDescription>
        </InterviewTextBlock>
      </InterviewTitleBlock>
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
    </InterviewBlockWrapper>
  );
};
