import React from "react";
import SideBar from "./SideBar";
import '../assets/css/app.css';
import ContentWrapper from "./ContentWrapper";

function App () {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar/>
        <ContentWrapper/>
      </div>
    </React.Fragment>
  )
}

export default App;