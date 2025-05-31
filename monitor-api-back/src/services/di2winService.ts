import fetch from 'node-fetch';
import FormData from 'form-data';
import Incident from '../models/Incident';
import dotenv from 'dotenv';
dotenv.config();

const API_BASE = 'https://homol.extraidados.com.br/api/portalEngines-processApp';
const TOKEN = process.env.DI2WIN_TOKEN!;

// Tipos de respostas
type ProcessAsyncResponse = {
  mensagem: string;
  processId: string;
};

type ProcessResultResponse = {
  mensagem: string;
  guid: string;
  erros?: Record<string, any>;
  resultados: any[];
};

export const enviarDocumento = async (
  fileBuffer: Buffer,
  userId: string,
  classification: string
): Promise<string> => {
  const form = new FormData();
  // Atenção: o campo deve ser 'document' conforme erro que você teve
  form.append('document', fileBuffer, 'documento.jpg');
  form.append('userId', userId);
  form.append('documentClassification', classification);

  const response = await fetch(`${API_BASE}/processAsync`, {
    method: 'POST',
    headers: {
      Authorization: TOKEN,
      ...form.getHeaders(),
    },
    body: form,
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('🔴 Erro ao enviar documento:', text);
    throw new Error(`Erro ao enviar documento. Status ${response.status}`);
  }

  const data = (await response.json()) as ProcessAsyncResponse;
  return data.processId;
};

export const consultarResultado = async (
  userId: string,
  processId: string
): Promise<ProcessResultResponse> => {
  const form = new FormData();
  form.append('userId', userId);
  form.append('processId', processId);

  const response = await fetch(`${API_BASE}/processResult`, {
    method: 'POST',
    headers: {
      Authorization: TOKEN,
      ...form.getHeaders(),
    },
    body: form,
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('🔴 Erro ao consultar resultado:', text);
    throw new Error(`Erro ao consultar resultado. Status ${response.status}`);
  }

  const result = (await response.json()) as ProcessResultResponse;

  if (result.erros && Object.keys(result.erros).length > 0) {
    await Incident.create({
      client: 'Cliente XYZ', // substitua pelo valor real se tiver
      model: 'Modelo IA ABC',  // substitua pelo valor real se tiver
      error: JSON.stringify(result.erros),
    });
  }

  return result;
};
