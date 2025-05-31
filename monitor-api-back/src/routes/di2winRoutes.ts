import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { enviarDocumento, consultarResultado } from '../services/di2winService';

const router = express.Router();
const upload = multer(); // Armazena o arquivo em memória (RAM)

router.post(
  '/processar',
  upload.single('image'),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const file = req.file?.buffer;
      const userId = req.body.userId;
      const classification = req.body.documentClassification;

      console.log('🟡 Recebido:');
      console.log('User ID:', userId);
      console.log('Classificação:', classification);
      console.log('Arquivo:', req.file);

      if (!file || !userId || !classification) {
        res.status(400).json({ error: 'Campos obrigatórios faltando.' });
        return;
      }

      const processId = await enviarDocumento(file, userId, classification);
      const resultado = await consultarResultado(userId, processId);

      res.json({ mensagem: 'Processamento concluído.', resultado });
    } catch (error) {
      console.error('🔴 Erro ao processar documento:', error);
      res.status(500).json({ error: 'Erro ao processar documento.' });
    }
  }
);

export default router;
