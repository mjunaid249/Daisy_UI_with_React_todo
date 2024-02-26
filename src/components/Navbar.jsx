import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex items-center justify-between px-6">
      <a className="btn btn-ghost text-xl">Todo</a>

      <label className="flex cursor-pointer gap-2">
        <span className="label-text">Dark</span>
        <input
          type="checkbox"
          value="light"
          className="toggle theme-controller"
        />
        <span className="label-text">Light</span>
      </label>
    </div>
  );
};

export default Navbar;
