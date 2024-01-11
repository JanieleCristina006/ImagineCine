import './header.css';
import {Link} from 'react-router-dom'
import { FaRegStar } from "react-icons/fa6";
function Header(){
    return(
        <header>
        <nav>
        <Link className='logo'to='/'>ImagiCine</Link>
          <Link className='favoritos' to='/favoritos'>
            Meus Filmes <FaRegStar  className='icon'/>
          </Link>
        </nav>
        
        </header>
    )
}

export default Header;
