import { useEffect, useState } from "react";

function Clima() {
  const [clima, setClima] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  function buscarClima() {
    setCarregando(true);
    setErro("");

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-4.3219&longitude=-46.4403&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=America%2FSao_Paulo"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setClima(dados.current);
      })
      .catch(() => {
        setErro("Não foi possível carregar as informações do clima.");
      })
      .finally(() => {
        setCarregando(false);
      });
  }

  useEffect(() => {
    buscarClima();
  }, []);

  return (
    <div className="clima card shadow-sm">
      <div className="card-body">
        <h3 className="card-title">Clima em Buriticupu</h3>

        {erro && (
          <div className="alert alert-danger" role="alert">
            {erro}
          </div>
        )}

        {carregando && !clima && (
          <p className="text-muted">Carregando informações...</p>
        )}

        {clima && (
          <div>
            <p className="mb-2">
              Temperatura: {clima.temperature_2m} °C
            </p>

            <p className="mb-2">
              Umidade: {clima.relative_humidity_2m}%
            </p>

            <p className="mb-3">
              Velocidade do vento: {clima.wind_speed_10m} km/h
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={buscarClima}
              disabled={carregando}
            >
              {carregando ? "Atualizando..." : "Atualizar clima"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clima;