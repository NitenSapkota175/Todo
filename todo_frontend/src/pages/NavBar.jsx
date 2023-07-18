import React from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {getLoginInfo} from '../utils/LoginInfo';
import logo from '../pages/images/logo.png';

export default function NavBar() {
  let navigate = useNavigate();
  const user = getLoginInfo();

  return (
    <div>
              <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-title">
        <h1>TodoApp</h1>
      </div>
      <div className="navbar-user">
        <span>{user.username}</span>
        <button className="logout-button"   onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}>
          <Link to="logout">Logout</Link>
        </button>
      </div>
    </nav>

    </div>
  )
}
