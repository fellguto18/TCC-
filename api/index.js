import 'dotenv/config'

import adminController from './src/controller/adminController.js'
import usuarioController from './src/controller/usuarioController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/imgProjetos', express.static('storage/imgProjetos'));

server.use(adminController);
server.use(usuarioController);

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))
