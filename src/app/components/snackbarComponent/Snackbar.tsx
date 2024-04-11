import React, { useState } from 'react';
import './Snackbar.css'; // Estilos para el Snackbar

interface snackbarProps {
  message: string;
  duration?: number;

}

const Snackbar = ({ message, duration = 3000 } : snackbarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, duration);

  return (
    <div className={`snackbar ${isVisible ? 'show' : ''}`}>
      <div className="snackbar-message">{message}</div>
    </div>
  );
};

export default Snackbar;
