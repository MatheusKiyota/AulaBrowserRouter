import {Link} from "react-router-dom"

export default function Header(){
    return(
        <header>
        
    <nav>
         <ul>
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