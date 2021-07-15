import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import InputMaintenance from "./Pages/InputMaintenance";
import PurchaseReq from "./Pages/PurchaseReq";
import SupplierMaintenance from "./Pages/SupplierMaintenance";
import SideNavigationBar from "./Components/UIElements/SideNavigationHeader/SideNavigationBar";
function App() {
  return (
    <Router>
      <SideNavigationBar></SideNavigationBar>
      <Switch>
        <Route path="/purchasereq">
          <PurchaseReq></PurchaseReq>
        </Route>
        <Route exact path="/inputMaintenance">
          <InputMaintenance></InputMaintenance>
        </Route>
        <Route exact path="/supplierMaintenance">
          <SupplierMaintenance></SupplierMaintenance>
        </Route>
        <Redirect exact from="/" to="/purchasereq" />
      </Switch>
    </Router>
  );
}

export default App;
