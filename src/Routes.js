import React from 'react';
import Dashboard from './Screens/Dashboard.js';
import AddStudent from './Screens/StudentsAdd'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Switch } from 'antd';

function routes(){
    return(
        <Router>
            <Route path='/Add' element={AddStudent}/>
        </Router>
    )
}
export default routes;