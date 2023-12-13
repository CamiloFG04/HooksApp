import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className={(args) => {
                    return args.isActive ? "nav-link active" : "nav-link";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={(args) => {
                    return args.isActive ? "nav-link active" : "nav-link";
                  }}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={(args) => {
                    return args.isActive ? "nav-link active" : "nav-link";
                  }}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
