import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';
import { MAX_STATEMENT_LENGTH } from '../../shared/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFile = path.join(__dirname, '../db.json');
const adapter = new JSONFile(dbFile);
let db;

async function getDB() {
  if (!db) {
    // Provide default data when creating Low instance
    db = new Low(adapter, { statements: [] });
    await db.read();
  } else {
    await db.read();
  }
  // Ensure structure exists
  if (!db.data) db.data = { statements: [] };
  if (!db.data.statements) db.data.statements = [];
  await db.write();
  return db;
}

function splitTextHelper(text, maxLen = MAX_STATEMENT_LENGTH) {
  const sentences = text.match(/[^.!?\n]+[.!?\n]?/g) || [text];
  let result = [];
  let current = '';
  for (const s of sentences) {
    if ((current + s).length > maxLen) {
      if (current) result.push(current.trim());
      current = s;
    } else {
      current += s;
    }
  }
  if (current) result.push(current.trim());
  return result;
}

export async function getAllStatements(query) {
  const db = await getDB();
  let statements = db.data.statements;
  if (query) {
    statements = statements.filter(s => s.text.toLowerCase().includes(query.toLowerCase()));
  }
  return statements;
}

export async function addStatement(text, tags = []) {
  if (!text) throw new Error('Text required');
  const db = await getDB();
  const statement = { id: Date.now(), text, tags };
  db.data.statements.push(statement);
  await db.write();
  return statement;
}

export async function splitAndAddStatements(text) {
  if (!text) throw new Error('Text required');
  const split = splitTextHelper(text);
  const db = await getDB();
  const newStatements = split.map((t, i) => ({ id: Date.now() + i, text: t, tags: [] }));
  db.data.statements.push(...newStatements);
  await db.write();
  return newStatements;
}

export async function deleteStatement(id) {
  const db = await getDB();
  const before = db.data.statements.length;
  db.data.statements = db.data.statements.filter(s => s.id !== id);
  await db.write();
  if (db.data.statements.length === before) {
    throw new Error('Not found');
  }
  return { success: true };
}

export async function updateStatementTags(id, tags) {
  const db = await getDB();
  const statement = db.data.statements.find(s => s.id === id);
  if (!statement) throw new Error('Not found');
  statement.tags = tags || [];
  await db.write();
  return statement;
} 