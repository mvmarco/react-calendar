import { DAYSINWEEK, WEEKSINYEAR } from "../../utils/constantsCalendar";
import { generateDateGrid } from "../../utils/dateutils";
import DateComponent from "./date";
import MonthComponent from "./month";
import styled from "styled-components";
import { useState } from "react";

const CalendarComponent = ({ setActiveMonth, activeMonth }) => {
  // const [monthInViewport, setMonthInViewport] = useState(2);
  // setActiveMonth(monthInViewport);

  const dateGrid = generateDateGrid(activeMonth);

  const firstDayInMonth = [];
  const weekRowValue = [];

  //from 0 to 54
  for (let weekIndex = 0; weekIndex < WEEKSINYEAR; weekIndex++) {
    let weekRow = [];
    // from 0 to 7
    for (let dayIndex = 0; dayIndex < DAYSINWEEK; dayIndex++) {
      if (dateGrid[weekIndex][dayIndex][0] === 1) {
        firstDayInMonth.push(weekIndex);
      }
      weekRow.push(
        <DateComponent
          value={dateGrid[weekIndex][dayIndex][0]}
          day={dayIndex}
          month={firstDayInMonth.length}
          active={dateGrid[weekIndex][dayIndex][1]}
        />
      );
    }
    weekRowValue.push(<Week>{weekRow}</Week>);
  }

  let currentMonth = 1,
    monthRow = [];

  const monthRowFunction = Array(WEEKSINYEAR)
    .fill(1)
    .map((val, index) => {
      if (index && index === firstDayInMonth[currentMonth]) {
        const monthValue = (
          <MonthComponent mid={currentMonth - 1}>{monthRow}</MonthComponent>
        );
        currentMonth++;
        monthRow = [weekRowValue[index]];
        return monthValue;
      } else {
        monthRow.push(weekRowValue[index]);
      }
    });
  return monthRowFunction;
};

// STYLES
const Week = styled.div`
display: flex;
scroll-snap-align: start;
`;

export default CalendarComponent;
