import { useState } from "react";

function Login({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        onLogin(true);
      }else{
        alert("Datos incorrectos");
      }
    });

  };

return(
  <div className="login-container">
    <div className="login-card">

      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={iniciarSesion}>
        Ingresar
      </button>

    </div>
  </div>
);

}

export default Login;
