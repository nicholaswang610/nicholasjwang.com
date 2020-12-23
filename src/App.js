import './App.css';
import Work from './Work';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Work}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
