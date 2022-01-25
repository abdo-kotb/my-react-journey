import { useState } from 'react';

import './app.css';

import AddUser from './components/users/AddUser';
import UsersSect from './components/users/UsersSect';

function App() {
  const [users, setNewusers] = useState([]);

  const storeUserDetails = function (name, age) {
    const userDetails = {
      userName: name,
      userAge: age,
      id: Math.random().toString(),
    };

    setNewusers(prevUsers => [userDetails, ...prevUsers]);
  };

  return (
    <div className="app">
      <AddUser onFormSubmit={storeUserDetails} />
      <UsersSect items={users} />
    </div>
  );
}

export default App;
