import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './buttonvoltar.css'

export const ButtonVoltar = () => {
  return (
    <>
    <button className="button-voltar"><Link to="/"><FaArrowLeft/></Link></button>
    
    </>
  )
}
