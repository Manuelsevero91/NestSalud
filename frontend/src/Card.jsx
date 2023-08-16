import React from 'react';

function Card ({ medico })  {
  
  return (
    <div className="card">
      <h2>{medico.id}</h2>
      <h2>{medico.nombre}</h2>
      <h2>{medico.apellido}</h2>
      <p>Especialidad: {medico.especialidad}</p>
    </div>
  );
};

export default Card;
