import './CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewAll from './Layouts/ViewAll/ViewAll';
import Search from './Components/Search';
import Footer from './Components/Footer';
import LangResult from './Components/LangResult';
import {useContext} from 'react'
import {NewsContext} from './News/NewsAPIContext';
import Loader from './Layouts/Loader'

function App() {

  const {isLoading } = useContext(NewsContext)

  return (
        
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
   {isLoading ? <Loader /> : <Footer />}
</div>
      
  );
}

export default App;
