import React from "react";

const Form = () => {
  return (
    <form
      className="auth-form col"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="username">UserName</label>
      <input
        id="username"
        required
        placeholder="Enter Username"
        onChange={() => {}}
      />

      <label htmlFor="password">Password </label>
      <input
        id="password"
        required
        type="password"
        placeholder="Enter Password"
        onChange={() => {}}
      />

      <button id="auth-form-btn" type="submit">
        SIGNUP
      </button>
    </form>
  );
};

export default Form;
