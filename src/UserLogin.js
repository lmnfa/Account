// import React, { Component } from "react";

// class UserLogin extends Component {
const UserLogin = () => {
  const clickHandler = () => {
    console.log("Ən azı 8 simvol");
  };

  const clickHandleragain = () => {
    console.log("Yalnız .ru domenlərinə icazə verilir");
  };

  return (
    <div className="userlogin">
      <h1> Account </h1>

      <div className="space1">
        <input className="one" type="text" />
        <button onClick={clickHandler}> Parol </button>
      </div>

      <div className="space">
        <input className="two" type="text" />
        <button onClick={clickHandleragain}> Email </button>
      </div>
    </div>
  );
};
export default UserLogin;
