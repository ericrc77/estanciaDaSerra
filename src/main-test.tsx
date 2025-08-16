import React from 'react';
import ReactDOM from 'react-dom/client';

function TestApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎉 React está funcionando!</h1>
      <p>Se você vê esta mensagem, o React está carregando corretamente.</p>
      <button onClick={() => alert('Clique funcionando!')}>
        Testar interação
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TestApp />);
