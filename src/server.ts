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

// Levanta o servidor
app.listen(3001, () => console.log('Eu juro solenemente não fazer nada de bom'));