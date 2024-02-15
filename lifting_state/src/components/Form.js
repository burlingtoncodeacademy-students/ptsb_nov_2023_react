import React from "react";

const Form = (props) => {
  return (
    <form
      className="auth-form col"
      onSubmit={(e) => {
        e.preventDefault();

        //? Do a fetch here

        props.setLoggedIn(true);
      }}
    >
      <label htmlFor="username">UserName</label>
      <input
        value={props.username}
        id="username"
        required
        placeholder="Enter Username"
        onChange={(e) => props.setUserName(e.target.value)}
      />

      <label htmlFor="password">Password </label>
      <input
        value={props.password}
        id="password"
        required
        type="password"
        placeholder="Enter Password"
        onChange={(e) => props.setPassword(e.target.value)}
      />

      <button id="auth-form_btn" type="submit">
        SIGNUP
      </button>
    </form>
  );
};

export default Form;
