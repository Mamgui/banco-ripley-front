import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {Provider} from "react-redux"
import MainContainer from "./containers/MainContainer/MainContainer"
import RecoverPasswordContainer from './containers/RecoverPasswordContainer/RecoverPasswordContainer'
import store from "./store";
import RegisterContainer from "./containers/RegisterContainer/RegisterContainer";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainContainer/>
                    </Route>
                    <Route exact path="/recover-password">
                        <RecoverPasswordContainer/>
                    </Route>
                    <Route exact path="/register">
                        <RegisterContainer/>
                    </Route>
                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
