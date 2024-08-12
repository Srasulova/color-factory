import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav >
      <Link style={{marginLeft:"7px"}} to="/colors">Home</Link>
      <Link style={{marginLeft:"7px"}} to="/colors/new">Add New Color</Link>
    </nav>
  );
}

export default Nav;
