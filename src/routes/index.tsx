import { Switch } from "react-router-dom";
import Route from "./route";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
// import Login from "../pages/Login";
// import NotFound from "../pages/NotFound";
// import ClientDashboard from "../pages/Client/Dashboard";
// import AdminDashboard from "../pages/Admin/Dashboard";
// import RepresentativeDashboard from "../pages/Representative/Dashboard";

const Routes = () => {
  // acessar o campo usuario_permissao do objeto user usando o hook User, que possui as informações:
  // "e_cliente": true,
  // "e_representante": false,
  // "e_funcionario": false
  // E fazer uma lógica pra renderizar o dashboard correto

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      {/* <Route exact path="/dashboard" component={***client, admin ou representative Dashboard***} isPrivate />
      <Route path="*" component={NotFound} />  */}
    </Switch>
  );
};

export default Routes;
