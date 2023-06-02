import React from "react";
import Video from "./Components/Video";
import "./App.css";
const App = () => {
  return (
    <>
      {/* app container */}
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="app"
      >
        <div className="videoList">

        <Video />
        <Video />
        <Video />
        </div>
      </div>
    </>
  );
};

export default App;
