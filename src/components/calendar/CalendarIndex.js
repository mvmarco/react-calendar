import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import CalendarComponent from "./CalendarComponent";
import DayComponent from "./DayComponent";
import { MONTH, DATE, WEEK } from "./utils/constantsCalendar";
import { useState } from "react";


export default function CalendarIndex() {
  const [activeMonth, setActiveMonth] = useState(0)
  return (
    <CalendarContainer>
    <Nav>
      <GlobalStyle />
      <h1>
        {MONTH[activeMonth]} <Year style={{color: "white"}}>{DATE.getFullYear()}</Year>
      </h1>
      <Row>
        {WEEK.map((week,key) => (
          <DayComponent day={week} key={key} />
        ))}
      </Row>
      <Wrapper>
        <CalendarComponent
          setActiveMonth={setActiveMonth}
          activeMonth={activeMonth}
        />
      </Wrapper>
    </Nav>
    </CalendarContainer>
  );
}

const Year = styled.span`
  font-weight: 100;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  /* border-bottom: 1px solid #c7c7c7; */
  height: 28px;
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
  color: #20b295;
  box-shadow: 0px 0px 1px 0px #c7c7c7;
  position: fixed;
  width: 100%;
  background-color: #196262;
`;

const CalendarContainer = styled.div`


`;
