import { Request, Response } from 'express';
import Incident from '../models/Incident';

export const createIncident = async (req: Request, res: Response) => {
  try {
    const incident = await Incident.create(req.body);
    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar incidente.' });
  }
};

export const getIncidents = async (req: Request, res: Response) => {
  try {
    const { client, model, startDate, endDate } = req.query;
    const filter: any = {};

    if (client) filter.client = client;
    if (model) filter.model = model;
    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      };
    }

    const incidents = await Incident.find(filter);
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar incidentes.' });
  }
};
