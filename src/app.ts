import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import clienteRoutes from './routes/cliente.routes';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(clienteRoutes);

export default app;