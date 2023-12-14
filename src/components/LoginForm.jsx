import { useId, useRef } from "react";
import { API_URL } from "../utils/consts";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginForm.module.css";

function LoginForm() {
  const ref = useRef(null);

  const emailRef = useId();
  const passwordRef = useId();

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email,
      password,
    };

    const req = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (req.status !== 200) {
      ref.current.reset();
      return alert("Error al iniciar sesión");
    }

    const res = await req.json();

    login(res);

    ref.current.reset();

    navigate("/posts");
  };

  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Iniciar sesión:</h2>
        <form onSubmit={handleSubmit} ref={ref} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor={emailRef} className={styles.label}>
              Correo electrónico:
            </label>
            <input
              type="email"
              placeholder="ejemplo@email.com"
              name="email"
              id={emailRef}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor={passwordRef} className={styles.label}>
              Contraseña:
            </label>
            <input
              type="password"
              placeholder="*******"
              name="password"
              id={passwordRef}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
