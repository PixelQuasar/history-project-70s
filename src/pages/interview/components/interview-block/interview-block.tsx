import {
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
} from "./styles.ts";

import imageImports from "../../../../assets/image-imports.ts";

export const InterviewBlock = () => {
  return (
    <InterviewBlockWrapper>
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
          <b>Котенок:</b> <i>lorem ipsum</i>
        </InterviewBubbleWrapper>

        <InterviewQuestionBlock>
          <b>Корреспондент:</b> <i>Что????</i>
        </InterviewQuestionBlock>
        <InterviewBubbleWrapper>
          <b>Котенок:</b> <i>lorem ipsum</i>
        </InterviewBubbleWrapper>

        <InterviewQuestionBlock>
          <b>Корреспондент:</b> <i>Что?????????</i>
        </InterviewQuestionBlock>
        <InterviewBubbleWrapper>
          <b>Котенок:</b> <i>lorem ipsum</i>
        </InterviewBubbleWrapper>
      </InterviewMainBlock>
    </InterviewBlockWrapper>
  );
};
