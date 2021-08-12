import styled from "styled-components";
import { MONTH } from "../../utils/constantsCalendar";
const MonthComponent = (props) => {
  return <Month id={MONTH[props.mid]}>


  </Month>;
};
// STYLES
const Month = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  padding-right: 10px;
`;
export default MonthComponent;
