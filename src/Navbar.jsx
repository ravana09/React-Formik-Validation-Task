import { Link } from "react-router-dom";

export function Navbar() {


  return (
    <nav className=" navbar navbar-expand-md  navbar-dark">
      <div className="container">
        <Link to={"/students"} className=" text-white navbar-brand">
          {/* <i class="me-2 fa-solid fa-graduation-cap"></i> */}
          <img
            src="/image/formik logo.png"
            alt="swasticblog"
            style={{ width: "8rem", height: "4rem" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mynav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="mynav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item active ">
              <button> <Link to={"/"} className="navLink">
                Home
              </Link></button>
             
            </li>
            <li className="nav-item">
              <button> <Link to={"/books"} className="navLink" >
                Books
              </Link></button>
             
            </li>
            <li className="nav-item  ">
              <button><Link to={"/addbooks"} className="navLink"  >
                Add Book
              </Link></button>
              
            </li>
            <li className="nav-item ">
              <button><Link to={"/books/take"} className="navLink" >
                Return Book
              </Link>{" "}</button>
            </li>
              

            {/* <li class="nav-item active"> <a class="nav-link" href="#">Login</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}