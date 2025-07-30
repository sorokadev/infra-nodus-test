import statementRoutes from './statementRoutes.js';

export default function registerRoutes(app) {
  app.use('/api/statements', statementRoutes);
} 