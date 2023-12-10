import { Header, HeaderBlock, HomePageWrapper, SubHeader } from "./styles";
import Triangle from "../../styles/shapes/Triangle.tsx";
import { staticTheme } from "../../styles/theme.ts";
import Stripes from "../../styles/shapes/Stripes.tsx";
export default function HomePage() {
  const goToPage = (path: string) => {
    const navigate = useNavigate();
    return () => {
      setTransition(true);
      setTimeout(() => {
        navigate(path);
      }, 750);
    };
  };

  return (
    <HomePageWrapper>
      <HeaderBlock>
        <Header>СЕМИДЕСЯТЫЕ</Header>
        <SubHeader>последнее советское поколение</SubHeader>
      </HeaderBlock>

      <div className="menu-container">
        <div
          className={`link slide-item-1 transition-link`}
          onClick={goToPage("/about")}
        >
          About
        </div>
        <div
          className={`link slide-item-2 transition-link`}
          onClick={goToPage("/projects")}
        >
          Projects
        </div>
        <div
          className={`link slide-item-3 transition-link`}
          onClick={goToPage("/info")}
        >
          Skills
        </div>
        <div
          className={`link slide-item-4 ${transition ? "transition-link" : ""}`}
          onClick={goToPage("/contacts")}
        >
          Contacts
        </div>

        <div className="bottom-slider">
          <div className={`bar ${transition ? "transition-bar" : ""}`}></div>
        </div>
      </div>
      <Triangle
        x={-500}
        y={-200}
        size={7}
        color={staticTheme.ayy4.yellow}
        degree={-45}
        side={-1}
        transition={false}
      />
      {/*<Circle*/}
      {/*  x={-50}*/}
      {/*  y={700}*/}
      {/*  size={2}*/}
      {/*  color={staticTheme.ayy4.dark}*/}
      {/*  side={-1}*/}
      {/*  transition={false}*/}
      {/*/>*/}
      <Triangle
        x={50}
        y={300}
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
      {/*<Circle*/}
      {/*  x={1500}*/}
      {/*  y={700}*/}
      {/*  size={3}*/}
      {/*  color={staticTheme.ayy4.redPale}*/}
      {/*  side={-1}*/}
      {/*  transition={false}*/}
      {/*/>*/}
      {/*<Circle*/}
      {/*  x={1600}*/}
      {/*  y={500}*/}
      {/*  size={1}*/}
      {/*  color={staticTheme.ayy4.yellow}*/}
      {/*  side={-1}*/}
      {/*  transition={false}*/}
      {/*/>*/}
    </HomePageWrapper>
  );
}
