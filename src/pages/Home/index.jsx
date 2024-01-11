import { useEffect, useState } from "react";
import api from "../../services/api";
import {Link }from 'react-router-dom';
import './home.css';
//https://api.themoviedb.org/3/movie/now_playing?api_key=063e1c70b61d8d7491b1e5b20038a6b0&language=pt-BR

function Home () {
  const[filmes,setFilmes] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get("movie/now_playing",{
        params:{
          api_key:"063e1c70b61d8d7491b1e5b20038a6b0",
          language: "pt-BR",
          page:1,
        }
      })

      //console.log(response.data.results.slice(0,10));
      setFilmes(response.data.results.slice(0,12))
      setLoading(false);
    }

    loadFilmes();
  },[])

   if(loading){
    return(
      <div className="loading">
           <h2>Carregando filmes...</h2>
      </div>
    )
   }

  return (
    <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
                <strong>{filme.title}</strong>
                <button><Link to={`/filme/${filme.id}`}>Acessar</Link></button>
              </article>
            )
          })}
        </div>
    </div>
  )
}

export default Home;
