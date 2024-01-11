import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import { PiFilmSlateBold } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";

import { ButtonVoltar } from '../../components/ButtonVoltaar';

import './favoritos.css'

function Favoritos(){
    const [filmes,setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    },[])

    function exlcuirFilme(id){
        let filtroFilme = filmes.filter((item)=>{
            return (item.id != id)
        })

        setFilmes(filtroFilme);
        localStorage.setItem("@primeflix",JSON.stringify(filtroFilme))
        toast.success("Filme removido com sucesso!")
    }
    return(
        <>
        <p>Meus Filmes <PiFilmSlateBold /></p>
        <section className='meus-filmes'>
            {filmes.length === 0 && <span className='nenhum-filme'>Nenhum filme salvo</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id} className='filmes-f'>
                            <span>{item.title}</span>
                            <Link className='details' to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button className='button-excluir' onClick={()=> exlcuirFilme(item.id)}><FaRegTrashCan /></button>
                        </li>
                    )
                })}
            </ul>
        </section>
    <div className="voltar">
      <ButtonVoltar/>
    </div>
       
        </>
    )
}

export default Favoritos;