import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SmurfForm from "./smurfForm";

//Components
import SmurfList from "./smurfList";

function App() {
  const smurfs = useSelector((state) => state.smurfReducer);
  // console.log(smurfs);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <div>
        <Route exact path="/">
          <SmurfForm state={smurfs} />
          <SmurfList state={smurfs} />
        </Route>
      </div>
    </div>
  );
}

export default App;
