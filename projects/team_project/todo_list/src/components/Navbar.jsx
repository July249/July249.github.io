import React from 'react';

const NavBar = (props) => (
  <nav>
    <h1 className="title">
      Todo List({props.totalCount}) - # Primary : {props.starCount}
    </h1>
  </nav>
);

export default NavBar;
