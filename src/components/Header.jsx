import { Link } from "react-router-dom";
import "../globals.css";

export default function Header() {
    return (

    <div className="cabecario"> 
        <header>
            <nav className="lista">
                <ul className="menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/produto">Produto</Link>
                    </li>
                    <li>
                        <Link to="/oferta">Oferta</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    );
}
