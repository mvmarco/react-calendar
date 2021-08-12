import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MONTH } from "../../utils/constantsCalendar";

const MonthComponent = (props) => {

  const monthRef = useRef();
  // 214
  useEffect(()=> {
    obs = new IntersectionObserver((entries) => {
      entries.forEach((entry)=> {

      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1
    })
  })
  return <Months id={MONTH[props.mid]} ref={monthRef}>
      {props.children}

  </Months>;
};
// STYLES
const Months = styled.div`
  scroll-snap-align: start;
  color: #e6e5e6;
`;
export default MonthComponent;
