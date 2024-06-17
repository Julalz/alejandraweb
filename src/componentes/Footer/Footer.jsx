import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-4 col-sm-6">
              <h4>Enlaces</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Servicios</a>
                </li>
                <li>
                  <a href="#">Quiénes Somos</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>{" "}
                <li>
                  <a href="#">Empleo</a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4 col-sm-6">
              <h4>Contacto</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Dirección: Rua Reiseñor 15, Vigo</a>
                </li>
                <li>
                  <a href="#">Teléfono: 986 19 27 85 / 605 11 38 27</a>
                </li>
                <li>
                  <a href="#">Email: direccion@alejandraquinterostudio.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4 col-sm-12">
              <h4>Suscríbete</h4>
              <p>
                Recibe nuestras actualizaciones directamente en tu bandeja de
                entrada.
              </p>
              <form className="footer-form">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                />
                <button type="submit">Suscribirse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
