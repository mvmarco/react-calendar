import styled from "styled-components";
import { MONTH } from "../../utils/constantsCalendar";
const MonthComponent = (props) => {
  return <Months id={MONTH[props.mid]}>
      {props.children}

  </Months>;
};
// STYLES
const Months = styled.div`

`;
export default MonthComponent;
