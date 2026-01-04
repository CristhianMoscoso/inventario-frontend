import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ok, setOk] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setOk("");

    try {
      await register({ name, email, password });
      setOk("Registro exitoso. Ahora inicia sesión.");
      setTimeout(() => nav("/login"), 800);
    } catch (err) {
      setError(err?.response?.data?.message || "Error al registrar");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 520, marginTop: 50 }}>
      <div className="card p-4">
        <h2>Registro</h2>

        {ok && <p style={{ color: "green" }}>{ok}</p>}
        {error && <p style={{ color: "#b00020" }}>{error}</p>}

        <form onSubmit={onSubmit}>
          <label>Nombre</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label className="mt-2">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="mt-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100 mt-3" type="submit">
            Crear cuenta
          </button>
        </form>

        <small className="muted d-block mt-3">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </small>
      </div>
    </div>
  );
}
