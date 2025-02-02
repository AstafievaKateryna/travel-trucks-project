import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
