import { Link, NavLink } from "react-router-dom";

export const TopNav = () => {
  return (
    <header>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/logo_header.svg`}
          alt="Logo SportSee Header"
        />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/">Profil</NavLink>
          </li>
          <li>
            <NavLink to="/">Réglage</NavLink>
          </li>
          <li>
            <NavLink to="/">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
