import './App.css';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import CareerPage from './Components/CareerPage/CareerPage';
import ContactUsPage from './Components/ContactUsPage/ContactUsPage';
import HomePage from './Components/HomePage/HomePage';
import Products from './Components/Products/Products';
import ResponsibilityAndHealthPage from './Components/ResponsibilityAndHealthPage/ResponsibilityAndHealthPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Router path="/homePage">
            <HomePage></HomePage>
          </Router>
          <Route path="/aboutUsPage">
            <AboutUsPage></AboutUsPage>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/careerPage">
            <CareerPage></CareerPage>
          </Route>
          <Route path="/responsibilityAndHealthPage">
            <ResponsibilityAndHealthPage></ResponsibilityAndHealthPage>
          </Route>
          <Route path="/contactUsPage">
            <ContactUsPage></ContactUsPage>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
