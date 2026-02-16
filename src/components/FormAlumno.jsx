import { useState } from "react";

function FormAlumno({ cargarAlumnos }) {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const registrarAlumno = () => {

    if(!nombre || !email){
      alert("Completa los campos");
      return;
    }

    fetch("http://127.0.0.1:8000/api/alumnos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre,
        email
      })
    })
    .then(() => {
      setNombre("");
      setEmail("");
      cargarAlumnos();
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={registrarAlumno}>
        Registrar Alumno
      </button>
    </div>
  );
}

export default FormAlumno;
