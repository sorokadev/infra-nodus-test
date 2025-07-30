import React from 'react';

export default function StatementList({ statements, onDelete, onTagEdit }) {
  if (!statements.length) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        color: '#a0aec0',
        fontSize: '1.1rem'
      }}>
        <svg
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 16px',
            opacity: 0.5
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <div>No statements found.</div>
        <div style={{ fontSize: '0.9rem', marginTop: '4px' }}>
          Add your first statement above to get started.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#2d3748'
      }}>
        Statements ({statements.length})
      </h3>
      
      <div style={{
        display: 'grid',
        gap: '16px'
      }}>
        {statements.map(s => (
          <div
            key={s.id}
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '20px',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#2d3748',
              marginBottom: '12px'
            }}>
              {s.text}
            </div>
            
            {s.tags && s.tags.length > 0 && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '16px'
              }}>
                {s.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'flex-end'
            }}>
              {onTagEdit && (
                <button
                  onClick={() => onTagEdit(s)}
                  style={{
                    background: '#f7fafc',
                    color: '#4a5568',
                    border: '1px solid #e2e8f0',
                    padding: '8px 16px',
                    borderRadius: 6,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = '#edf2f7';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = '#f7fafc';
                  }}
                >
                  Edit tags
                </button>
              )}
              
              <button
                onClick={() => onDelete(s.id)}
                style={{
                  background: '#fed7d7',
                  color: '#c53030',
                  border: '1px solid #feb2b2',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.target.style.background = '#feb2b2';
                  e.target.style.borderColor = '#fc8181';
                }}
                onMouseLeave={e => {
                  e.target.style.background = '#fed7d7';
                  e.target.style.borderColor = '#feb2b2';
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 