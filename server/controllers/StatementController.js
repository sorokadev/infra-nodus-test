import * as statementService from '../services/statementService.js';

export async function getAll(req, res) {
  try {
    const result = await statementService.getAllStatements(req.query.q);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export async function splitText(req, res) {
  try {
    const { text } = req.body;
    const result = await statementService.splitAndAddStatements(text);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function addOne(req, res) {
  try {
    const { text, tags } = req.body;
    const result = await statementService.addStatement(text, tags);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function remove(req, res) {
  try {
    const id = Number(req.params.id);
    const result = await statementService.deleteStatement(id);
    res.json(result);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}

export async function updateTags(req, res) {
  try {
    const id = Number(req.params.id);
    const { tags } = req.body;
    const result = await statementService.updateStatementTags(id, tags);
    res.json(result);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
} 