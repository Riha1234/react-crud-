import Navbbar from './component/Navbbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUser from './component/AddUser'
import Home from './component/Home'

function App() {
  return (
    <Router>
    <div>
     <Navbbar/>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/adduser' component={AddUser}/>
       <Route path='/users/edituser/:id' component={AddUser}/>
       
     </Switch>
    </div>
    </Router>
  );
}

export default App;
