import { useState } from "react";
import Alumno from "/components/Alumno";

function App() {
  const [alumnos] = useState([
    { id: 1, nombre: "Juan Pérez", carrera: "Programación" },
    { id: 2, nombre: "María López", carrera: "Diseño" },
    { id: 3, nombre: "Carlos Gómez", carrera: "Redes" }
  ]);

  return (
    <div>
      <h1>Lista de Alumnos</h1>

      <ul>
        {alumnos.map((alumno) => (
          <Alumno
            key={alumno.id}
            nombre={alumno.nombre}
            carrera={alumno.carrera}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;