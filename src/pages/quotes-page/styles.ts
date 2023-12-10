import styled from "styled-components";

export const QuotePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 128px;
  padding-bottom: 256px;
  gap: 128px;
  background-color: #ffffff;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 3em;
  font-weight: bold;
  font-family: "Courier New";
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Quote = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  background-color: #ffffff;
  font-size: 1.5em;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 32px;
`;

// copilot, see this styled components? make them beautifully animated
// and make them look like the ones from the design
export const QuoteContent = styled.div`
  background-color: #eeeef4;
  font-family: "Courier New";
  font-style: italic;
  margin: 32px;
  height: 100%;
  padding: 32px;
  border-radius: 8px;
`;

export const QuoteAuthor = styled.div`
  text-align: right;
  justify-content: left;
  align-items: flex-end;
  font-family: "Courier New";
  text-align: right;
  font-weight: bold;
  margin: 32px;
  margin-top: 4px;
`;
