import React, { useEffect, useState } from "react";

const RevealEvent = (props) => {
  console.log(props);
  const [change, setChange] = useState(true);
  const [Name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    document.title = `Hi! ${Name} `;
  });
  return (
    <div>
      <div class="nameplate">
        Enter name:
        <input type="text" value={Name} onChange={handleChange} />
        <br />
        {Name.length > 0 && <h4>Hello, {Name}</h4>}
      </div>
      <button class="btn btn-warning" onClick={() => setChange(!change)}>
        {" "}
        {/* (event.target.change = !change)*/}
        Click Here to reveal Event Title!
      </button>

      <br />
      <br />
      {change ? (
        <h3>
          _____________________________________________________________________
        </h3>
      ) : (
        <h3 class="reveal">
          Reaching the First Milestone with Web development
        </h3>
      )}
    </div>
  );
};

export default RevealEvent;
