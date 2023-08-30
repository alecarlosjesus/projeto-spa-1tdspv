import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {



    return(
        <>
            <nav className="navbar">
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li className="active"><Link to="/produtos">Produtos</Link></li>
                </ul>
            </nav>
        </>
    )
}