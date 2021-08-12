import styled from "styled-components";
import { MONTH } from "../../utils/constantsCalendar";
const MonthComponent = (props) => {
  return <Months id={MONTH[props.mid]}>
      {props.children}

  </Months>;
};
// STYLES
const Months = styled.div`
  scroll-snap-align: start;
  color: #e6e5e6;
`;
export default MonthComponent;
