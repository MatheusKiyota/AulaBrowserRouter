import { Link } from "react-router-dom";
import "../globals.css";

export default function Header() {
    return (

    <div className="cabecario"> 
        <header>
        <div className="Home">
                <img className="fotoStussy" src="src/fotos/bola8.png" alt="Imagem de bola 8" />
            </div>
            
            <nav className="lista">
                <ul className="menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/produto">products</Link>
                    </li>
                    <li>
                        <Link to="/oferta">  offer</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    );
}
