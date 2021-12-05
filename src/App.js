//import logo from './logo.svg';
import './App.css';
//import reactDom from 'react-dom';
import Show from './component/show'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <h1>Card</h1>
      <Router>
        <Switch>
          <Route path="/show">
           <Show/>
          </Route>
        </Switch>
        <nav>
          {/* <ul>
            <li> */}
              <Link to="/show">Show</Link>
            {/* </li>
          </ul> */}
        </nav>
      </Router>
    </div>
    </>
  );
}
export default App;

