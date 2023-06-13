import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

const EVENTS = [
  {id: 1, name: "Event 1"},
  {id: 2, name: "Event 2"},
  {id: 3, name: "Event 3"},
  {id: 4, name: "Event 4"},
  {id: 5, name: "Event 5"},
]

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to = "/" className={isActive => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
           <NavLink to = "/events" className={isActive => isActive ? "active" : ""}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
