import React from "react";

const Nav = () => {
  return (
    <nav>
      <p>Home</p>
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>

      <div className="row nav-user">
        <h5 style={{ margin: 0 }}>UserName</h5>
        <button
          onClick={() => {
            console.log("User has logged out");
          }}
        >
          LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default Nav;
