import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Navbar} from "./Components/Navbar"
import './App.css';


function App() {
  return (
 <>
<BrowserRouter>
<Navbar  />
<Switch>
  <Route></Route>
</Switch>
</BrowserRouter>
 
 </>
  );
}

export default App;
