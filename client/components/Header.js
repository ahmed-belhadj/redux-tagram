import React from "react";
import { Link } from "react-router";

const Header = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Redux-tagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Header;
