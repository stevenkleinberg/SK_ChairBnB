import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";


function LoginForm({closeModalFunc}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleClickDemo = () => {

    setCredential('demo@user.io')
    setPassword('password')


}

  return (
    <div className="logInFormDiv">
      <form className="logInForm" onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <ul className="errorsList">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="logInLabel">
          Username or Email
          <input
            className="logInInput"
            type="text"
            placeholder="Username or Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}

          />
        </label>
        <label className="logInLabel">
          Password
          <input
            className="logInInput"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}

          />
        </label>
        <div className='signUpLink'>
          <NavLink to="/signup" onClick={()=> closeModalFunc()}>Don't Have an Account? </NavLink>
        </div>
        <button  className="booking-card__btn" type="submit">Log In</button>
        <button  className="booking-card__btn"  onClick={handleClickDemo}>Demo User</button>
      </form>
    </div>
  );
}

export default LoginForm;
