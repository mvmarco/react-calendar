import styled from "styled-components";
import { DATE, MONTH } from "./constantsCalendar";

const DateComponent = ({ value, day, month, active }) => {
 /* console.log("Xxxxxxxxx", month);
  console.log("YYYYYYY", MONTH[month] &&MONTH[month].substr(0,2));
  console.log(value);*/
let dateStyle = false;
  if(value === DATE.getDate() && month > 0){
    if(
      (value === 1 && month - 1 === DATE.getMonth())||
      (value !== 1 && month - 1 === DATE.getMonth())
     ) {
        dateStyle = true;
    } 
  }
  return (
    <Date className={`${!day ? "sunday" : ""} ${active ? "active-month" : ""}`}>
      <DateBox>
        <Text className={dateStyle ? "active" : ""}>{value}</Text>
        {value === 1 ? <Month>{MONTH[month - 1] && MONTH[month - 1].substr(0, 3)}</Month> : null}
      </DateBox>
    </Date>
  );
};
// STYLES 820: active and sunday need to work, error in console
const Date = styled.div`
flex: 1;
display: flex;
flex-direction: column;
height: 100px;
border-right: 1px solid #e6e5e6;
border-bottom: 1px solid #e6e5e6;
padding: 8px 8px 0 0;
box-sizing: border-box;
&:last-child {
  border-right: 0;
}
.sunday {
  background-color: #f5f5f5;
}
.active-month {
  transition: color 0.3s ease-in;
  color: black;
}

`;

const DateBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 14px;
`;

const Text = styled.span`
  height: 28px;
  width: 28px;
  justify-content: center;
  display: flex;
  align-items: center;
  .active {
    background-color: #00ba91;
    text-align: center;
    border-radius: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Month = styled.div`

`;

export default DateComponent;
