import { Title, TitleContentBlockWrapper } from "./styles.ts";

interface ITitleContentBlockProps {
  text: string;
  header: string;
  isLeft: boolean;
}

export const TitleContentBlock = (props: ITitleContentBlockProps) => {
  return (
    <TitleContentBlockWrapper>
      <Title>{props.text}</Title>
    </TitleContentBlockWrapper>
  );
};
