import styled from "styled-components";

export const ContactCardWrapper = styled.div`
  display: flex;
`;

export const ContactBlock = styled.div`
  display: flex;
`;

export const Name = styled.div`
  display: flex;
`;

export const Portrait = styled.div<{ src: string }>`
  display: flex;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;
