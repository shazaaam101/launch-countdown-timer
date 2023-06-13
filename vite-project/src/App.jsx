import { useEffect, useState } from "react";
import "./styles/App.css";
import Time from "./components/Time";

function App() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(13);
  console.log("second", seconds);
  const checkCountDown = () => {
    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      setHours(23);
      setMinutes(59);
      setSeconds(60);
      setDays((prev) => prev - 1);
      return [0, 1, 2, 3];
    }
    if (minutes <= 0 && seconds <= 0) {
      setMinutes(59);
      setSeconds(60);
      setHours((prev) => prev - 1);
      return [1, 2, 3];
    }
    if (seconds <= 0) {
      setSeconds(60);
      setMinutes((prev) => prev - 1);
      console.log("ASD");
      return [2, 3];
    }
    return [3];
  };

  useEffect(() => {
    const card = document.querySelectorAll(".card");
    const count = setInterval(() => {
      const numberFlipLists = checkCountDown();
      for (const number of numberFlipLists) {
        card[number].classList.add("flip");
        console.log(number);
      }

      setSeconds((prev) => prev - 1);
      setTimeout(() => {
        for (const number of numberFlipLists) {
          card[number].classList.remove("flip");
        }
      }, 500);
    }, 1000);
    return () => {
      clearInterval(count);
    };
  }, [seconds, minutes, hours, days]);

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <header>
            <h1>WE'RE LAUNCHING SOON</h1>
          </header>
          <div className="countdown">
            <Time label="DAYS" value={days} />
            <Time label="HOURS" value={hours} />
            <Time label="MINUTES" value={minutes} />
            <Time label="SECONDS" value={seconds} />
          </div>

          <div className="icons">
            <a href="#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
