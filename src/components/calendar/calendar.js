import { DAYSINWEEK, WEEKSINYEAR } from "../../utils/constantsCalendar";
import { generateDateGrid } from "../../utils/dateutils";
import DateComponent from "./date";

const CalendarComponent = () => {
  const dateGrid = generateDateGrid();

  const firstDayInMonth = [];
  const weekRowValue = [];

  //from 0 to 54
  for (let weekIndex = 0; i < WEEKSINYEAR; i++) {
    let weekRow = [];
    // from 0 to 7
    for (let dayIndex = 0; dateIndex < DAYSINWEEK; dayIndex++) {
      if (dateGrid[weekIndex][dateIndex][0] === 1) {
        firstDayInMonth.push(weekIndex);
      }
      weekRow.push(
        <DateComponent
          value={[dateGrid][weekIndex][dayIndex][0]}
          day={dayIndex}
          month={firstDayInMonth.length}
        />
      );
    }
    weekRowValue.push(<div>{weekRow}</div>);
  }

  // 138
  let currentMonth = 1,
    monthRow = [];
  return <div></div>;
};

export default CalendarComponent;
