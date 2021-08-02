import Footer from '../../components/Footer.js'
import Header from '../../components/Header.js'
import Login from '../login/Login.js'
import Register from '../register/Register.js'
import HomePage from '../home/HomePage.js'
import SubcategoryPage from '../categories/SubcategoryPage.js'
import ProductPage from '../products/ProductPage.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { GlobalProvider } from '../../context/GlobalState.js'


function App() {


//Eksempel på props

return (
  <GlobalProvider>
    <Router>
    <div className="App">
      <Header/>
        <div className="main">
          
          <Switch>
            <Route path='/' exact component = {HomePage}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={()=><Register/>}/>
            <Route path='/category/:categoryId' component = {SubcategoryPage}/>
            <Route path='/products' component = {ProductPage}/>
          </Switch>
        </div>
      <Footer/>
    </div>
    </Router>
  </GlobalProvider>
  );
}

export default App;
