import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import clienteRoutes from './routes/cliente.routes';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(clienteRoutes);
app.use('/docs', swaggerUI.serve);

export default app;