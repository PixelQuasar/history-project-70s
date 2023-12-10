import { InterviewPageWrapper } from "./styles.ts";
import { InterviewList } from "./components/interview-list/interview-list.tsx";

export const InterviewPage = () => {
  return (
    <InterviewPageWrapper>
      <InterviewList />
    </InterviewPageWrapper>
  );
};
