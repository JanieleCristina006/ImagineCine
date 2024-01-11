import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import {toast} from 'react-toastify';
import { ButtonVoltar } from "../../components/ButtonVoltaar";
import './filme.css';

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "063e1c70b61d8d7491b1e5b20038a6b0",
            language: "pt-BR",
          }
        });

        setFilme(response.data);
        setLoading(false);
      } catch (error) {
        navigate("/", { replace: true });
      }
    }

    loadFilme();

    return () => {
      console.log("Componente foi desmontado");
    };

  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

    if (hasFilme) {
      toast.warn("Esse filme já está na sua lista")
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!")
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="filme-info">
        <h1 className="titulo-filme">{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
        <h3>Sinopse :</h3>
        <span>{filme.overview}</span>
        <strong className="avaliacao">Avaliação: {filme.vote_average} / 10</strong>
        <div className="area-buttons">
          <button onClick={salvarFilme} className="button-info">Salvar</button>
          <button className="button-info">
            <a href={`https://youtube.com/results?search_query=${filme.title}`} target="_blank" rel="noopener noreferrer">Trailer</a>
          </button>
        </div>
        <ButtonVoltar/>
      </div>
    </div>
  );
}

export default Filme;
