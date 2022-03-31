import './App.css';
import Header from './components/Header';
import VocaList from './components/VocaList';
import AddVoca from './components/AddVoca';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadVocaFB} from './redux/modules/vocas'


function App() {

  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(loadVocaFB());
}, []);

  return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/">
              <VocaList />
            </Route>
            {/* <Route exact path="/voca/:num">
              <Voca />
            </Route> */}
            <Route path="/addVoca">
              <AddVoca />
            </Route>
          </Switch>
      </div>
  );
}

export default App;
