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
const Nav = styled.div``;
const Year = styled.div``;
const Row = styled.div``;

export default App;
