import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './/Home';
import NavBar from './/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewAll from '../Layouts/ViewAll/ViewAll';
import Search from './Search';
import Footer from './Footer';
import LangResult from './/LangResult';
import { NewsContextProvider , NewsContext } from '../News/NewsAPIContext';
import {useContext} from 'react';
import Loader from '../Layouts/Loader'


const AppComponent = () => {
    return(
        <div className="App">
        <NavBar />
     <Router>
       <Switch>
         <Route name='home' exact path='/' component = {Home} />
         <Route exact path = '/search' component = {Search} />
         <Route exact path='/:category' component = {ViewAll} />
         <Route exact path='/language/:language' component = {LangResult} />
       </Switch>
     </Router>
     <Footer />
   </div>
    )
}
export default AppComponent;