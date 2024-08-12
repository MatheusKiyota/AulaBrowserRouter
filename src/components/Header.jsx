import {Link} from "react-router-dom"
import "../globals.css";

export default function Header(){
    return(
        <header>
        
    <nav className="listaAcima">
         <ul className="lista"> 
            <Link to="/home" className="a">
                <li>Home</li>
            </Link>

            <Link to="/produto">
                <li>produto</li>
            </Link>

            <Link to="/oferta">
                <li>oferta</li>
            </Link>
        </ul>
     </nav>

        </header>
    );
}