import { Route, Switch } from 'react-router-dom';
import './App.css';
import Bar from './components/Bar';
import Cards from './components/Cards';
import Forum from './components/Forum';
import FullCard from './components/FullCard';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      
      <Bar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/blog' component={Forum}/>
      <Route exact path='/cards' component={Cards}/>
      <Route exact path='/fullcard/:Id' component={FullCard}/>
      </Switch>
    </div>
  );
}

export default App;
