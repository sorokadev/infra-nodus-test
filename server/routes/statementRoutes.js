import { Router } from 'express';
import * as StatementController from '../controllers/StatementController.js';

const router = Router();

router.get('/', StatementController.getAll);
router.post('/split', StatementController.splitText);
router.post('/', StatementController.addOne);
router.delete('/:id', StatementController.remove);
router.patch('/:id/tags', StatementController.updateTags);

export default router; 