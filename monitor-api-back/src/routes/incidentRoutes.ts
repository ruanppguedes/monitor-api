import express from 'express';
import { createIncident, getIncidents } from '../controllers/incidentController';

const router = express.Router();

router.post('/incidents', createIncident);
router.get('/incidents', getIncidents);

export default router;
