import {
  ContactCardWrapper,
  ContactBlock,
  Name,
  Portrait,
  Title,
} from "./styles.ts";
import Default from "../../../../assets/images/profile-user.png";

export const ContactsCard = () => {
  return (
    <ContactCardWrapper>
      <Title>Работу выполняли:</Title>
      <ContactBlock>
        <Portrait src={Default} />
        <Name>Дарья Тимчищина</Name>
      </ContactBlock>
      <ContactBlock>
        <Portrait src={Default} />
        <Name>Кирилл Полканов</Name>
      </ContactBlock>
      <ContactBlock>
        <Portrait src={Default} />
        <Name>Александра Соколова</Name>
      </ContactBlock>
      <ContactBlock>
        <Portrait src={Default} />
        <Name>Макс Ермолаев</Name>
      </ContactBlock>
      <ContactBlock>
        <Portrait src={Default} />
        <Name>Владимир Попов</Name>
      </ContactBlock>
      <ContactBlock>
        <Portrait src={Default} />
        <Name>Амир Кашапов</Name>
      </ContactBlock>
    </ContactCardWrapper>
  );
};
