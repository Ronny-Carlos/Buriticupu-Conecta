import Clima from "./Clima";

function Inicio() {
  return (
    <section className="apresentacao">
      <h2>Bem-vindo ao Buriticupu Conecta</h2>

      <p>
        Uma plataforma digital criada para aproximar a população
        das informações, serviços e oportunidades de Buriticupu.
      </p>

      <img
        src="/buriticupu1.png"
        alt="Imagem representando a cidade de Buriticupu"
        className="img-fluid"
      />

      <p>
        Nosso objetivo é utilizar a tecnologia para contribuir
        com uma cidade mais conectada, acessível e participativa.
      </p>

      <div className="destaque-ods">
        <h3>ODS 11 – Cidades e Comunidades Sustentáveis</h3>

        <p>
          O projeto está relacionado ao Objetivo de Desenvolvimento
          Sustentável 11, que busca tornar as cidades mais inclusivas,
          seguras, resilientes e sustentáveis.
        </p>
      </div>

      <Clima />
    </section>
  );
}

export default Inicio;