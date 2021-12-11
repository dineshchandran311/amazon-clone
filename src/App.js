import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
    
    const [{}, dispatch] = useStateValue();

    useEffect( ()=>{
        
        auth.onAuthStateChanged( authUser =>{
            console.log('The user is ', authUser);

            if(authUser){
                dispatch({
                    type:'SET_USER',
                    user: authUser
                })
            }
            else{
                dispatch({
                    type:'SET_USER',
                    user: null
                })
            }
        })

    }, [])

  return (
    <Router>
        <div className="app">
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
               
                <Route path="/checkout">
                    <Header/>
                    <Checkout />
                </Route>
                
                <Route path="/">
                    <Header/>
                    <Home />
                </Route>
            </Switch>
        </div>      
    </Router>
  );
}

export default App;
