import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn.js";
import Profile from "./Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Switch> */}
        <Route exact path="/" component={SignIn} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
