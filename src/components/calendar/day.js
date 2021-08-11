import styled from "styled-components";

const DayComponent = (props) => {
  return(
    <Day>
      <Title>
        {props.day}
      </Title>
      
    </Day>
  )
};

// STYLES
const Day = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  padding-right: 10px;
`;

const Title = styled.div`
  color: #8e8e8e;
`;

export default DayComponent;