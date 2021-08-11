import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import {MONTH, DATE, WEEK } from "./utils/constantsCalendar";
import DayComponent from "./components/calendar/day";

function App() {
  return (
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
    </Nav>
  );
}
const Nav = styled.div`
  color: black;
  box-shadow: 0px 0px 1px 0px #c7c7c7;
  position: fixed;
  width: 100%;
  background-color: white;
`;
const Year = styled.span`
  font-weight: 100;
`;
const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #c7c7c7;
  height: 24px;
`;
export default App;
