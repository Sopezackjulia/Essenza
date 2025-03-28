// Carrega as variáveis do arquivo .env
require('dotenv').config();

const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
const app = express();

// Cors para requisições do frontend
app.use(cors());
app.use(express.json());

// Conexão com as credenciais do arquivo .env
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
  const { nome, celular, horario, quantidade, data } = req.body;

  //Mensagem que vai ser enviada no SMS
  const message = `Reserva confirmada!\nOlá ${nome}, sua reserva foi confirmada com sucesso!\nData: ${data}\nHorário: ${horario}\nQuantidade de Pessoas: ${quantidade}`;

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: celular,
    })
    .then((message) => {
      // Verifica se a mensagem foi enviada
      res.status(200).json({ success: true, message: 'SMS enviado com sucesso' });
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: error.message });
    });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
