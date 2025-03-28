// Importação de arquivos
import React, { useState } from 'react';
import './form.css';

export default function Form() {
  // Armazenando os valores para o formulário
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('+55');
  const [horario, setHorario] = useState('19:00');
  const [quantidade, setQuantidade] = useState('2');
  const [data, setData] = useState('');
  const [status, setStatus] = useState('');

  // Função chamada quando o formulário for enviado
  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const selectedDate = new Date(data);
    // Verificação de datas
    if (selectedDate < currentDate) {
      setStatus('Você está escolhendo uma data que já passou! Escolha uma data futura.');
      return;
    }

    // Envio dos dados do servidor para o envio do sms
    const response = await fetch('http://localhost:5000/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        celular,
        horario,
        quantidade,
        data,
      }),
    });

    const dataResponse = await response.json();

    // Verificação de resposta
    if (dataResponse.success) {
      setStatus('Reserva confirmada! Uma mensagem foi enviada no seu celular.');
    } else {
      setStatus('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <div className="container-form">
      <div className="background-image"></div>
      <h2 className="titleReservation">Faça sua Reserva</h2>
      {/* Criação do formulário */}
      <form onSubmit={handleSubmit}> {/* Chamando a função quando é enviado */}
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="celular">Celular:</label>
        <input
          type="tel"
          id="celular"
          name="celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          required
        />

        <label htmlFor="data">Data da Reserva:</label>
        <input
          type="date"
          id="data"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />

        <label htmlFor="horario">Horário Desejado:</label>
        <select
          id="horario"
          name="horario"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        >
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>

        <label htmlFor="quantidade">Quantidade de Pessoas:</label>
        <select
          id="quantidade"
          name="quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5 ou mais</option>
        </select>

        <button type="submit">Reservar</button>
      </form>
      {/* Exibe a mensagem de status */}
      {status && <p className='status'>{status}</p>} { }
    </div>
  );
}
