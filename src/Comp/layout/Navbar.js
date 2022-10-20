import React from 'react'
import { Link } from 'react-router-dom'

// const styles = {
//     login: {

//         // marginH
//     }
// }

const Navbar = () => {


    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div >
                    {/* <a className="navbar-brand " href="#">React</a> */}
                    <h1 style={{ color: "white" }}>React</h1>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li> */}
                        {/* <h2 style={{ color: "white" }}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">Home</Link>
                            </li>
                        </h2> */}

                        <div >
                            <li className="nav-item">
                                <h1 style={{ color: "white", marginLeft: "900%" }}> <Link className="nav-link" to="/Login">Login</Link></h1>
                            </li>
                        </div>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li> */}


                    </ul>
                    <div>
                        {/* <form className="form-inline my-2 my-lg-0    ">



                            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />

                            <button className="btn btn-success btn-lg float-right" type="submit">Search</button>

                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
