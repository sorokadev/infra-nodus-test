import React, { useEffect, useState, useCallback } from 'react';
import StatementForm from './components/StatementForm';
import StatementList from './components/StatementList';
import StatementFilter from './components/StatementFilter';
import TagEditor from './components/TagEditor';
import {
  getStatements,
  addStatement,
  splitText,
  deleteStatement,
  updateTags
} from './services/statementService';

export default function App() {
  const [statements, setStatements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const [editingStatement, setEditingStatement] = useState(null);
  const [isTagEditorOpen, setIsTagEditorOpen] = useState(false);

  const fetchStatements = useCallback(async (q = '') => {
    setLoading(true);
    setError('');
    try {
      const data = await getStatements(q);
      setStatements(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatements(filter);
  }, [fetchStatements, filter]);

  const handleAdd = async text => {
    setError('');
    try {
      await addStatement(text);
      fetchStatements(filter);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSplit = async text => {
    setError('');
    try {
      await splitText(text);
      fetchStatements(filter);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDelete = async id => {
    setError('');
    try {
      await deleteStatement(id);
      fetchStatements(filter);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleEditTags = (statement) => {
    setEditingStatement(statement);
    setIsTagEditorOpen(true);
  };

  const handleSaveTags = async (id, tags) => {
    setError('');
    try {
      await updateTags(id, tags);
      fetchStatements(filter);
    } catch (e) {
      setError(e.message);
      throw e;
    }
  };

  const handleCloseTagEditor = () => {
    setIsTagEditorOpen(false);
    setEditingStatement(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      width: '100vw',
      overflowX: 'hidden'
    }}>
      <div style={{
        maxWidth: 800,
        margin: '0 auto',
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '32px',
          textAlign: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.5px'
          }}>
            Statement Manager
          </h1>
          <p style={{
            margin: '8px 0 0 0',
            opacity: 0.9,
            fontSize: '1.1rem'
          }}>
            Organize and manage your text statements with ease
          </p>
        </div>
        
        <div style={{ padding: '32px' }}>
          <StatementForm onAdd={handleAdd} onSplit={handleSplit} />
          <StatementFilter onFilter={setFilter} />
          
          {loading && (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: '#666',
              fontSize: '1.1rem'
            }}>
              <div style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                border: '2px solid #f3f3f3',
                borderTop: '2px solid #667eea',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginRight: '12px'
              }}></div>
              Loading statements...
            </div>
          )}
          
          {!loading && (
            <StatementList 
              statements={statements} 
              onDelete={handleDelete} 
              onTagEdit={handleEditTags}
            />
          )}
          
          {error && (
            <div style={{
              background: '#fee',
              color: '#c53030',
              padding: '16px',
              borderRadius: 8,
              marginTop: 16,
              border: '1px solid #fed7d7'
            }}>
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>
      </div>

      <TagEditor
        statement={editingStatement}
        isOpen={isTagEditorOpen}
        onClose={handleCloseTagEditor}
        onSave={handleSaveTags}
      />
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
