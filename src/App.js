import './App.css';
import Header from './components/Header';
import VocaList from './components/VocaList';
import AddVoca from './components/AddVoca';
import { Route, Switch, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadVocaFB } from './redux/modules/vocas'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVocaFB());

  }, []);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path="/">
          <div>
            <VocaList />
            <div style={{
              position: "absolute",
              right: "60px",
              bottom: "60px"
            }}>
              <Link to="/addVoca">
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Link></div>
          </div>
        </Route>
        <Route path="/addVoca">
          <AddVoca />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
