
import { useState } from "react";
import Calendar from './components/calendar'
function App() {
  const [activeMonth, setActiveMonth] = useState(0);
  return (
    <Calendar activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
  );
}




export default App;
