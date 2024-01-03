import { Link } from "react-router-dom";

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to={"/general"} className="badge bg-light text-dark fs-4" onClick={()=>setCategory("general")}><img className='pe-2' style={{width: "40px"}} src="letter-n.png"></img>newsApp</Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <Link to={"/technology"} className="nav-link" onClick={()=>setCategory("technology")}>
                Technology
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/business" className="nav-link" onClick={()=>setCategory("business")}>
                Business
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/health" className="nav-link" onClick={()=>setCategory("health")}>
                Health
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/science" className="nav-link" onClick={()=>setCategory("science")}>
                Science
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/sports" className="nav-link" onClick={()=>setCategory("sports")}>
                Sports
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/entertainment" className="nav-link" onClick={()=>setCategory("entertainment")}>
                Entertainment
              </Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
