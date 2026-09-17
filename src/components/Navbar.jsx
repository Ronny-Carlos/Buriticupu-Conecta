import { useLocation } from "react-router-dom";

function Navbar({ setSecao }) {
  const localizacao = useLocation();

  function estaAtivo(secao) {
    const caminho = secao === "inicio" ? "/" : `/${secao}`;

    return localizacao.pathname === caminho;
  }

  return (
    <nav>
      <button
        className={estaAtivo("inicio") ? "ativo" : ""}
        onClick={() => setSecao("inicio")}
      >
        Início
      </button>

      <button
        className={estaAtivo("servicos") ? "ativo" : ""}
        onClick={() => setSecao("servicos")}
      >
        Serviços
      </button>

      <button
        className={estaAtivo("sobre") ? "ativo" : ""}
        onClick={() => setSecao("sobre")}
      >
        Informações
      </button>

      <button
        className={estaAtivo("contato") ? "ativo" : ""}
        onClick={() => setSecao("contato")}
      >
        Contato
      </button>
    </nav>
  );
}

export default Navbar;