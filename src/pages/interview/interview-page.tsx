import { InterviewPageWrapper } from "./styles.ts";
import { InterviewBlock } from "./components/interview-block/interview-block.tsx";

export const InterviewPage = () => {
  return (
    <InterviewPageWrapper>
      <InterviewBlock />
    </InterviewPageWrapper>
  );
};
