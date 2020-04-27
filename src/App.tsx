import React from 'react';
import { Dialog } from './components/Dialog';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return isOpen ? (
    <Dialog
      button={<button onClick={() => setIsOpen(!isOpen)}>Close</button>}
      content={
        <>
          <blockquote>What happens in Vegas stays in Vegas!</blockquote>
          <cite>Unknown, but divorced</cite>
        </>
      }
    />
  ) : (
    <button onClick={() => setIsOpen(!isOpen)}>Open</button>
  );
}

export default App;
