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
  
`;

const Title = styled.div``;

export default DayComponent;