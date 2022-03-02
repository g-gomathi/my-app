import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Navbar,Body} from './components';
import GlobalStyle from "./GlobalStyle";

function App() {
    return(
        <Router>
            <GlobalStyle/>
            <Navbar/><br/>
            <Body/>
        </Router>
    );

}

export default App;
