const API_URL = 'http://localhost:3001/api/statements';

export async function getStatements(query = '') {
  const res = await fetch(`${API_URL}${query ? `?q=${encodeURIComponent(query)}` : ''}`);
  if (!res.ok) throw new Error('Failed to fetch statements');
  return res.json();
}

export async function addStatement(text, tags = []) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, tags })
  });
  if (!res.ok) throw new Error('Failed to add statement');
  return res.json();
}

export async function splitText(text) {
  const res = await fetch(`${API_URL}/split`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  if (!res.ok) throw new Error('Failed to split text');
  return res.json();
}

export async function deleteStatement(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete statement');
  return res.json();
}

export async function updateTags(id, tags) {
  const res = await fetch(`${API_URL}/${id}/tags`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tags })
  });
  if (!res.ok) throw new Error('Failed to update tags');
  return res.json();
} 