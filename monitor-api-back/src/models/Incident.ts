import mongoose from 'mongoose';

const IncidentSchema = new mongoose.Schema({
  client: { type: String, required: true },
  model: { type: String, required: true },
  error: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Incident', IncidentSchema);
