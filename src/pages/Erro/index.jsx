import { Link } from "react-router-dom";
import './erro.css'

function Erro (){
    return(
    <div className="not-found">
        <div>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/" className="filmes">Veja todos os filmes!</Link>
        </div>
    </div>
        
    )
}

export default Erro;