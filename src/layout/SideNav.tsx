import { NavLink } from "react-router-dom";

export const SideNav = () => {
  return (
    <aside className="sidenav">
      <nav>
        <ul>
          <li>
            <NavLink to="#">
              <img src={`${process.env.PUBLIC_URL}/icon_yoga.svg`} alt="Yoga" />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img
                src={`${process.env.PUBLIC_URL}/icon_swim.svg`}
                alt="Swimming"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img
                src={`${process.env.PUBLIC_URL}/icon_cycling.svg`}
                alt="Cycling"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img
                src={`${process.env.PUBLIC_URL}/icon_weight.svg`}
                alt="Weight Training"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p>Copyright, SportSee {new Date().getFullYear()}</p>
    </aside>
  );
};
