import './App.css';
import Work from './Work';
import Popinion from './Popinion';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Work}></Route>
        <Route exact path='/popinion' component={Popinion}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
