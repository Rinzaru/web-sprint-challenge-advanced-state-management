import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

//Components
import SmurfList from "./smurfList";
import SmurfForm from "./smurfForm";
// import SmurfPage from "./smurfPage";

function App() {
  const smurfs = useSelector((state) => state.smurfReducer);
  // console.log(smurfs);

  // <div>
  //       <Route exact path="/smurf/:smurfId">
  //         <SmurfPage state={smurfs} />
  //       </Route>
  //     </div>
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
