import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const nav = useNavigate();
  const { logout, token, user } = useAuth();

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <nav class="navbar navbar-dark bg-info px-4 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* IZQUIERDA: LOGO + MENÚ */}
        <div className="d-flex align-items-center gap-4">
          <span className="navbar-brand fw-bold">📦 Inventario</span>

          {token && (
            <>
              <Link className="nav-link text-light" to="/dashboard">
                Tablero
              </Link>
              <Link className="nav-link text-light" to="/products">
                Productos
              </Link>
              <Link className="nav-link text-light" to="/movements">
                Informes
              </Link>
            </>
          )}
        </div>

        {/* DERECHA: USUARIO + LOGOUT */}
        {token && (
          <div className="d-flex align-items-center gap-3 text-light">
            <div className="text-end" style={{ lineHeight: 1.1 }}>
              <div className="fw-semibold">{user?.name || "Usuario"}</div>
              <div className="text-muted" style={{ fontSize: 12 }}>
                Rol: {user?.role || "user"}
              </div>
            </div>

            <button
              className="btn btn-sm btn-outline-light"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
