import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import incidentRoutes from './routes/incidentRoutes';
import di2winRoutes from './routes/di2winRoutes';


dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api', di2winRoutes);
app.use('/api', incidentRoutes);
app.use('/api', di2winRoutes); // aqui


// Rotas
app.use('/api', incidentRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Conexão e inicialização do servidor
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('🟢 Conectado ao MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => console.error('🔴 Erro ao conectar no MongoDB:', err));
