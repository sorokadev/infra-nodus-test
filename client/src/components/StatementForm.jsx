import React, { useState } from 'react';

export default function StatementForm({ onAdd, onSplit }) {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('add'); // 'add' or 'split'

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    if (mode === 'add') {
      onAdd(text);
    } else {
      onSplit(text);
    }
    setText('');
  };

  return (
    <div style={{
      background: '#f8fafc',
      borderRadius: 12,
      padding: '24px',
      marginBottom: '24px',
      border: '1px solid #e2e8f0'
    }}>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#2d3748'
      }}>
        Add New Statement
      </h3>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={4}
          placeholder={mode === 'add' ? 'Enter a statement...' : 'Enter text to split into multiple statements...'}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '2px solid #e2e8f0',
            borderRadius: 8,
            fontSize: '1rem',
            fontFamily: 'inherit',
            resize: 'vertical',
            transition: 'border-color 0.2s ease',
            boxSizing: 'border-box'
          }}
          onFocus={e => e.target.style.borderColor = '#667eea'}
          onBlur={e => e.target.style.borderColor = '#e2e8f0'}
        />
        
        <div style={{
          margin: '16px 0',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '0.95rem',
            color: '#4a5568'
          }}>
            <input
              type="radio"
              checked={mode === 'add'}
              onChange={() => setMode('add')}
              style={{
                marginRight: '8px',
                transform: 'scale(1.1)'
              }}
            />
            Add as single statement
          </label>
          
          <label style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '0.95rem',
            color: '#4a5568'
          }}>
            <input
              type="radio"
              checked={mode === 'split'}
              onChange={() => setMode('split')}
              style={{
                marginRight: '8px',
                transform: 'scale(1.1)'
              }}
            />
            Split into multiple statements
          </label>
        </div>
        
        <button
          type="submit"
          disabled={!text.trim()}
          style={{
            background: text.trim() ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#cbd5e0',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600,
            cursor: text.trim() ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            if (text.trim()) {
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseLeave={e => {
            if (text.trim()) {
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          {mode === 'add' ? 'Add Statement' : 'Split & Add'}
        </button>
      </form>
    </div>
  );
} 