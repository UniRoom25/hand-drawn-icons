import { useState } from 'react';
import * as Icons from '../src/index';

// Filter out non-component exports
const iconList = Object.entries(Icons).filter(([name, component]) => {
  return name !== 'default' && typeof component === 'function';
});

function App() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (name: string) => {
    const text = `<${name} />`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(name);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Hand Drawn Icons</h1>
      <p>Click on an icon to copy the component name.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
        {iconList.map(([name, IconComponent]: [string, any]) => (
           <div 
             key={name} 
             onClick={() => copyToClipboard(name)}
             style={{ 
               border: '1px solid #ddd', 
               borderRadius: '8px', 
               padding: '20px', 
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center', 
               cursor: 'pointer',
               backgroundColor: 'white',
               transition: 'transform 0.1s',
               position: 'relative',
               boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
             }}
             onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
             onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
           >
             <IconComponent width={48} height={48} />
             <span style={{ marginTop: '15px', fontSize: '14px', textAlign: 'center', fontWeight: 500 }}>{name}</span>
             {copied === name && (
               <div style={{
                 position: 'absolute',
                 top: '10px',
                 right: '10px',
                 background: '#4caf50',
                 color: 'white',
                 padding: '4px 8px',
                 borderRadius: '4px',
                 fontSize: '12px',
                 fontWeight: 'bold'
               }}>Copied!</div>
             )}
           </div>
        ))}
      </div>
    </div>
  );
}

export default App;
