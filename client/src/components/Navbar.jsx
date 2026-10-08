import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/habits" style={{ marginRight: "15px" }}>Habits</Link>
      <Link to="/progress">Progress</Link>
    </nav>
  );
}

export default Navbar;
