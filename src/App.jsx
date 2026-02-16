import { useState } from "react";
import FormAlumno from "./components/FormAlumno";
import ListaAlumnos from "./components/ListaAlumnos";
import Login from "./components/temp"; // ⚠️ importante
import "./App.css";

function App() {

  const [logueado, setLogueado] = useState(false);
  const [recargar, setRecargar] = useState(false);

  const cargarAlumnos = () => {
    setRecargar(!recargar);
  };

  // 👇 ESTA PARTE FALTA
  if(!logueado){
    return <Login onLogin={setLogueado} />;
  }

  return (
    <div>

      <div className="navbar">
        <span>Bienvenido Admin</span>

        <button
          className="logout-btn"
          onClick={()=>setLogueado(false)}
        >
          Cerrar sesión
        </button>
      </div>

      <div className="container">
        <h1>Lista de Alumnos</h1>

        <FormAlumno cargarAlumnos={cargarAlumnos} />
        <ListaAlumnos recargar={recargar} />
      </div>

    </div>
  );
}
export default App;
