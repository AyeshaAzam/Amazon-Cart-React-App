import React from "react";
import "./Header.css";

/*
props are objects with keys and value pairs:
props: {
  title:" Amazon clone"
}

So we usually do like this:
function Header(props) {
 console.log(props.title)
}
*/

function Header({ title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
