import React from "react";

const Carrossel: React.FC = () => {
    const handleClick = () => {
      alert('Botão clicado!');
    };
  
    return (
        <button onClick={handleClick}>BOTÃO</button>
    );
  };

  export default Carrossel;