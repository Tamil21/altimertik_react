import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { VehicleAdd } from './vehicle/VehicleAdd';
import { VehicleList } from './vehicle/VehicleList';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Add New Vehicle</Link>
          </li>
          <li>
            <Link to="/list">Vehicle List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={VehicleAdd} />
        <Route path="/list" Component={VehicleList}/>
      </Routes>
    </Router>
  );
};

export default App;
