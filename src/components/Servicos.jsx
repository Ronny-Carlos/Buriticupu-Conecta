import { useState } from "react";

function Servicos() {
  const [busca, setBusca] = useState("");

  const servicos = [
    {
      titulo: "Serviços públicos",
      descricao:
        "Encontre informações sobre serviços e atendimentos disponíveis para a população.",
    },
    {
      titulo: "Locais e informações",
      descricao:
        "Consulte informações sobre locais importantes e serviços disponíveis em Buriticupu.",
    },
    {
      titulo: "Notícias e avisos",
      descricao:
        "Acompanhe informações e avisos importantes relacionados à cidade.",
    },
    {
      titulo: "Oportunidades",
      descricao:
        "Encontre informações sobre cursos, capacitações e oportunidades para a comunidade.",
    },
  ];

  const servicosFiltrados = servicos.filter((servico) =>
    servico.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="servicos">
      <h2>O que você encontra no Buriticupu Conecta</h2>

      <input
        type="text"
        placeholder="Pesquisar serviço..."
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        className="campo-busca"
      />

      <div className="cards">
        {servicosFiltrados.map((servico) => (
          <div className="card" key={servico.titulo}>
            <h3>{servico.titulo}</h3>

            <p>{servico.descricao}</p>
          </div>
        ))}
      </div>

      {servicosFiltrados.length === 0 && (
        <p className="sem-resultados">
          Nenhum serviço encontrado.
        </p>
      )}
    </section>
  );
}

export default Servicos;
