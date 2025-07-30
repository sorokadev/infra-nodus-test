import React, { useState } from 'react';

export default function StatementFilter({ onFilter }) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div style={{
      marginBottom: '24px',
      position: 'relative'
    }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <svg
          style={{
            position: 'absolute',
            left: '16px',
            width: '20px',
            height: '20px',
            color: '#a0aec0'
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Filter statements by keyword..."
          style={{
            width: '100%',
            padding: '12px 16px 12px 48px',
            border: '2px solid #e2e8f0',
            borderRadius: 8,
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
            background: 'white'
          }}
          onFocus={e => {
            e.target.style.borderColor = '#667eea';
            //e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
          }}
          onBlur={e => {
            e.target.style.borderColor = '#e2e8f0';
            //e.target.style.boxShadow = 'none';
          }}
        />
        {value && (
          <button
            onClick={() => {
              setValue('');
              onFilter('');
            }}
            style={{
              position: 'absolute',
              right: '12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a0aec0',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              e.target.style.background = '#f7fafc';
              e.target.style.color = '#e53e3e';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'none';
              e.target.style.color = '#a0aec0';
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
} 