import "./App.css";
import React from "react";
import { Welcome, Clock } from "./components/Welcome";

function App() {
  const details = {
    d: new Date(),
    time: "7:00 PM",
    venue: "Microsoft Teams",
  };
  const d = new Date();
  const time = "6:00 PM";
  const venue = "Microsoft Teams";
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <h1>Welcome to MLSA!!</h1>
        <p>
          Each and everyone is capable of achieving everything, if you provide
          them with the right resources.
        </p>

        <a
          className="App-link"
          href="https://mlsa-nitsurat.super.site/club-mission"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLSA WEBSITE
        </a>
        <Welcome date={d} venue={venue} time={time} details={details} />
      </header>
    </div>
  );
}

export default App;
