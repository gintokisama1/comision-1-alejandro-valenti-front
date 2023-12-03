import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="container mt-5"
      style={{ background: "#f8f9fa", padding: "20px" }}
    >
      <h1 className="display-4 mb-4 text-center">
        ¡Bienvenido a nuestro mundo de aventuras! En nuestro vibrante foro de
        viajes, te sumergirás en un universo donde los apasionados viajeros
        comparten sus experiencias, consejos y emocionantes historias de
        exploración. ¿Listo para desatar tu espíritu aventurero?
      </h1>

      <section className="mb-4">
        <h2 className="h4 mb-3">Descubre y Conecta:</h2>
        <p>
          Explora destinos exóticos, descubre gemas ocultas y conecta con una
          comunidad global de trotamundos. Nuestro foro es el lugar perfecto
          para intercambiar ideas, recibir recomendaciones personalizadas y
          encontrar compañeros de viaje con gustos similares.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">Opiniones Auténticas:</h2>
        <p>
          Aquí, la autenticidad es la clave. Los usuarios comparten sus
          impresiones honestas sobre hoteles, restaurantes, actividades y mucho
          más. Desde las experiencias más lujosas hasta las joyas locales
          desconocidas, cada opinión contribuye a crear una guía de viaje
          comunitaria incomparable.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">Inspírate y Inspira:</h2>
        <p>
          Deja que las experiencias de otros inspiren tu próxima aventura. Ya
          sea que estés planeando una escapada de fin de semana o una expedición
          de larga duración, encontrarás inspiración en cada rincón de nuestro
          foro. Y, por supuesto, ¡asegúrate de compartir tus propias historias
          para inspirar a otros!
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">Conexión Genuina:</h2>
        <p>
          En este foro, la pasión por viajar une a personas de todas partes del
          mundo. Experimenta la conexión genuina con otros amantes de los viajes
          que comparten tu entusiasmo. Comparte fotos, consejos prácticos y
          momentos inolvidables mientras construyes relaciones duraderas con
          compañeros de viaje.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h4 mb-3">Tu Viaje, Tu Voz:</h2>
        <p>
          En <Link>www.experienciasnomades.com</Link>, cada usuario tiene una
          voz única. Participa en conversaciones animadas, debates
          enriquecedores y comparte tus propias perspectivas. Tu contribución es
          lo que hace que nuestra comunidad sea tan especial.
        </p>
      </section>

      <p className="lead text-center">
        Prepárate para sumergirte en una experiencia única de intercambio de
        conocimientos y conexiones auténticas. Únete a nosotros y deja que el
        mundo sea tu destino, con el foro de viajes donde cada historia cuenta.
        ¡Empieza tu viaje hoy!
      </p>

      <div className="text-center">
        <Link to="/register" className="btn btn-primary mx-2">
          REGISTRARSE
        </Link>
        <Link to="/login" className="btn btn-secondary mx-2">
          INICIAR SESIÓN
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
