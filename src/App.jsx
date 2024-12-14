import React, { useState } from 'react';
import Tarea from './Components/Tarea/Tarea';

function App() {
  // Estado para las tareas
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState(''); // Estado para el input de tarea

  // Función para agregar tarea
  const agregarTarea = () => {
    if (tarea!=='') {
      setTareas([...tareas, tarea]); // Agrega la tarea a la lista
      setTarea(''); // Limpiar el input
    }
  };

  // Función para eliminar tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      
      {/* Input para agregar tarea */}
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />
      
      {/* Botón para agregar tarea */}
      <button className='button-input' onClick={agregarTarea}>Agregar</button>

      {/* Lista de tareas */}
      <ul>
        {tareas.map((tarea, index) => (
          <Tarea
            key={index}
            tarea={tarea}
            eliminarTarea={() => eliminarTarea(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
