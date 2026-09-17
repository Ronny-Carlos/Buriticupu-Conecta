import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(evento) {
    evento.preventDefault();

    setEnviado(true);

    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <section className="contato">
      <h2>Entre em contato</h2>

      <p>
        Envie sua mensagem através do formulário abaixo.
      </p>

      <form className="contato-form" onSubmit={enviarFormulario}>
        <div>
          <label htmlFor="nome">Nome</label>

          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div>
          <label htmlFor="mensagem">Mensagem</label>

          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(evento) => setMensagem(evento.target.value)}
            placeholder="Digite sua mensagem"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit">
          Enviar mensagem
        </button>
      </form>

      {enviado && (
        <div className="mensagem-sucesso">
          Mensagem enviada com sucesso!
        </div>
      )}
    </section>
  );
}

export default Contato;