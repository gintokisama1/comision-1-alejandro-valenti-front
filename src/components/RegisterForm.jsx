import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../utils/consts";
import styles from "../styles/AuthForm.module.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    avatar: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (req.status === 201) {
        // Registro exitoso
        console.log("Usuario registrado con éxito");
        navigate("/login");
      } else {
        // Error en el registro
        const errorData = await req.json();
        console.error("Error al registrar usuario:", errorData.message);
        alert(`Error al registrar usuario: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error en la solicitud. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div className={styles.registerFormContainer}>
      <div className={styles.formContainer}>
        <div className="card">
          <div className="card-body">
            <h2 className="mb-4">Registro de usuarios</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="avatar" className="form-label">
                  Avatar
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="avatar"
                  placeholder="https://www.mi-avatar.com"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="ejemplo@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Nombre de Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Joe Doe"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="*******"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </form>
            {/* Enlace para redirigir a la página de inicio de sesión */}
            <div className="mt-3">
              ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
