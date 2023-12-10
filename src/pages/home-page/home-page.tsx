import { Header, HeaderBlock, HomePageWrapper, SubHeader } from "./styles";
import Triangle from "../../styles/shapes/Triangle.tsx";
import { staticTheme } from "../../styles/theme.ts";
import Stripes from "../../styles/shapes/Stripes.tsx";
import Navbar from "../../components/navbar";
import { ContactsCard } from "./components/contact-card/contact-card.tsx";
export default function HomePage() {
  return (
    <HomePageWrapper>
      <HeaderBlock>
        <Header>СЕМИДЕСЯТЫЕ</Header>
        <SubHeader>последнее советское поколение</SubHeader>
      </HeaderBlock>
      <Navbar />

      <ContactsCard />

      <Triangle
        x={-500}
        y={-200}
        size={7}
        color={staticTheme.ayy4.yellow}
        degree={-45}
        side={-1}
        transition={false}
      />
      <Triangle
        x={50}
        y={800}
        size={2}
        color={staticTheme.ayy4.redPale}
        degree={135}
        side={-1}
        transition={false}
      />
      <Triangle
        x={1500}
        y={-150}
        size={5}
        color={staticTheme.ayy4.yellow}
        degree={110}
        side={1}
        transition={false}
      />
      <Stripes
        x={1500}
        y={-100}
        size={3}
        color={staticTheme.ayy4.dark}
        degree={56}
        side={-1}
        transition={false}
      />

      <Triangle
        x={1200}
        y={900}
        size={10}
        color={staticTheme.ayy4.dark}
        degree={135}
        side={-1}
        transition={false}
      />
    </HomePageWrapper>
  );
}
