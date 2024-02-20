import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n'a pas été trouvée.
      </p>

      <Link className="error__link" to="/">
        <button className="error__button">
          Retourner sur la page d'accueil
        </button>
      </Link>
      <p className="error__copyright">
        Copyright, SportSee {new Date().getFullYear()}
      </p>
    </section>
  );
};
