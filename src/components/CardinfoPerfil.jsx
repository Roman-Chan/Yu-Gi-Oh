import React from 'react';

function PagePerfilAlum() {
  return (
    <div className='flex justify-center items-center h-screen bg-cream-100 w-screen'>
      <div className='page-container text-center max-w-screen-lg mx-auto px-4'>
        <div className='school-name text-5xl text-white'>Universidad Tecnologica Metropolitana</div>
        <div className='subject text-5xl text-white'>Aplicaciones web para 14.0</div>
        <div className='teacher-name text-5xl text-white' >Maestra: Martinez Dominguez Ruth</div>
        <div className='activity-name text-5xl text-white'>Consumo de API en React</div>
        <div className='student-name text-5xl text-white'>Nombre del alumno: Roman Ismael Chan Tuyu</div>
        <div className='quarter text-5xl text-white'>Cuatrimestre: 5</div>
        <div className='group text-5xl text-white'>Grupo: A</div>
      </div>
    </div>
  );
}

export default PagePerfilAlum;
