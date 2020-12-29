import './App.css';
import MainContainer from "./containers/MainContainer";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <MainContainer/>
        </Provider>
    );
}

export default App;
