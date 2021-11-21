import classes from "./Main.module.css";
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div className={classes.fieldButtons}>
            <NavLink to="/list-rooms">
                <button className={classes.buttonJoinTheRoom}>Приєднатися до списку кімнат</button>
            </NavLink>
            <button className={classes.buttonJoinTheRoom}>Приєднатися до кімнати</button>
            <button className={classes.buttonCreateRoom}>Створити кімнату</button>
        </div>
    )
}

export default Main;