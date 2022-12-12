import React from 'react'
import classes from './Homepage.module.css';
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  }
  const signupHandler = () => {
    navigate("/signup");
  }
  return (
    <div className={classes.homePage}>
      <header className={classes.homePageHeader}>
        <nav className={classes.hphs1}>

        </nav>
        <nav className={classes.hphs2}>
          {/* <div className={classes.navItems}>
            Home
          </div> */}
        </nav>
        <nav className={classes.hphs3}>
          <button
            className={classes.hphAuthSection}
            onClick={loginHandler}
          >
            login
          </button>
          <button
            className={classes.hphAuthSection}
            onClick={signupHandler}
          >
            sign-up
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Homepage