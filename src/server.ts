import express from 'express';
import cors, { CorsOptions } from 'cors';
import logger from 'morgan';

// Cria um novo app Express
const app = express();

// Middlewares

const corsOptions: CorsOptions = {};

// Deixa todos os serviços públicos
app.use(cors(corsOptions));

// Habilita logs mais detalhados
app.use(logger('dev'));

// Serviços (ou endpoints)
app.get('/pi', (req, res) => {
  const valorPi = Math.PI;
  return res.status(200).json({ pi: valorPi });
});

app.get('/soma/:parametro1/:parametro2', (req, res) => {
  const { parametro1, parametro2 } = req.params;
  const numero1 = Number(parametro1);
  const numero2 = Number(parametro2);
  if (!isNaN(numero1) && !isNaN(numero2)) {
    return res.status(200).json({ soma: numero1 + numero2 });
  } else {
    return res.status(400).send('Números inválidos');
  }
});

app.get('/divisao', (req, res) => {
  const { numero1, numero2 } = req.query;
  const n1 = Number(numero1);
  const n2 = Number(numero2);
  if (n2 === 0) {
    return res.status(400).json({ mensagem: 'Divisor não pode ser zero' });
  } else if (!isNaN(n1) && !isNaN(n2)) {
    return res.status(200).json({ divisao: n1 / n2 });
  } else {
    return res.status(400).send('Números inválidos');
  }
});

// Levanta o servidor
app.listen(3001, () => console.log('Eu juro solenemente não fazer nada de bom'));