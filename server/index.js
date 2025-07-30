import express from 'express';
import cors from 'cors';
import registerRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
}); 