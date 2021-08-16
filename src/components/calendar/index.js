import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import CalendarComponent from "./calendar";
import DayComponent from "./day";
import { MONTH, DATE, WEEK } from "./constantsCalendar";
import { useState } from "react";


export default function Main() {
  const [activeMonth, setActiveMonth] = useState(0)
  return (
    <>
    <Nav>
      <GlobalStyle />
      <h1>
        {MONTH[7]} <Year>{DATE.getFullYear()}</Year>
      </h1>
      <Row>
        {WEEK.map((week) => (
          <DayComponent day={week} />
        ))}
      </Row>
      <Wrapper>
        <CalendarComponent
          setActiveMonth={setActiveMonth}
          activeMonth={activeMonth}
        />
      </Wrapper>
    </Nav>
    </>
  );
}

const Year = styled.span`
  font-weight: 100;
`;
const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #c7c7c7;
  height: 24px;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 89px;
  overflow: scroll;
  height: calc(100vh - 86px);
  scroll-snap-type: proximity;
  scroll-snap-type: y proximity;
`;
// STYLES
const Nav = styled.div`
  color: black;
  box-shadow: 0px 0px 1px 0px #c7c7c7;
  position: fixed;
  width: 100%;
  background-color: white;
`;
