import {Component} from "react";

class Navbar extends Component{
    render()
    {
        return(
                <nav className="navbar">
                    <div className="nav">
                        <a className="nav-link text-dark fw-bold" href="./About1">Your</a>
                        <a className="nav-link text-dark fw-bold" href="./Resume1">All</a>
                        <a className="nav-link text-dark fw-bold" href="./Contactus">Blocked</a>

                    </div>
                    <div>
                    <p>Search</p>
                    </div>
                </nav>
        );
    }
}
export default Navbar;