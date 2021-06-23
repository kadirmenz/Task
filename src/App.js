import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import ContractBuilder from "./pages/contractbuilder/ContractBuilder";
import ConfirmContract from "./pages/confirmcontract/ConfirmContract";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";



function App() {
  return (
    <Router>
      
     
      <div className="container">
      
        <Sidebar/>
          
          <Switch>
          <Route exact path="/contractbuilder">

            <ContractBuilder />
          </Route>
          <Route path="/contractbuilder/confirmcontract">
          
            <ConfirmContract/>
          </Route>
        

        </Switch>
        
        
      </div>
   
     
    </Router>
  );
}

export default App;
