import React from "react";
import RevealEvent from "./RevealEvent";
import { useState, useEffect } from "react";

const Welcome = (props) => {
  console.log(props.details);
  var numbers = [1, 2, 3, 4, 5];

  const updatedNums = numbers.map((number) => {
    return <span>{number * 2} || </span>;
  });
  return (
    <div>
      <h4>Lets Learn react</h4>
      <RevealEvent p={props} />
      <div class="welcome">
        {/*toLocale String gives date and time*/}
        {/* Date: {props.date.toDateString()}{" "}
        <br />
        Time:{props.time}
        <br />
        Venue:{props.venue}
        <br /> */}
        <h5>Another way!</h5>
        Date:{props.details.d.toDateString()}
        <br />
        Time:{props.details.time}
        <br />
        Venue:{props.details.venue}
        <hr />
        <ul>{updatedNums}</ul>
      </div>
    </div>
  );
};

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <div class="clock">{date.toLocaleTimeString()}</div>;
}

export { Welcome, Clock };
