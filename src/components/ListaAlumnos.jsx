import { useEffect, useState } from "react";

function ListaAlumnos({ recargar }) {

  const [alumnos, setAlumnos] = useState([]);

  const cargarAlumnos = () => {
    fetch("http://127.0.0.1:8000/api/alumnos")
      .then(res => res.json())
      .then(data => setAlumnos(data));
  };

  useEffect(() => {
    cargarAlumnos();
  }, [recargar]);

  const eliminarAlumno = (id) => {
    fetch(`http://127.0.0.1:8000/api/alumnos/${id}`, {
      method: "DELETE"
    })
    .then(() => cargarAlumnos());
  };

  return (
    <ul>
      {alumnos.map(alumno => (
        <li key={alumno.id}>
          {alumno.nombre} - {alumno.email}

          <button onClick={() => eliminarAlumno(alumno.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaAlumnos;
