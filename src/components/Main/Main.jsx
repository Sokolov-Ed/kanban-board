import classes from "./Main.module.css";
import { NavLink, Navigate } from "react-router-dom";
import CreateRoom from "../OtherPages/CreateRoom";

const Main = ({ authorization, setShowCreateRoom, isShowCreateRoom, addRoom }) => {
    if (!authorization.isAuth) {
        return <Navigate replace to="/login" />
    }
    return (
        <div>
            {isShowCreateRoom && <CreateRoom setShowCreateRoom={setShowCreateRoom}
                                            authorization={authorization}
                                            addRoom={addRoom}/>}
            <div className={classes.fieldButtons}>
                <NavLink to="/list-rooms">
                    <button className={classes.buttonJoinTheRoom}>Приєднатися до списку кімнат</button>
                </NavLink>
                {(authorization.authorized.isTeacher || authorization.authorized.isAdmin) &&
                    <button className={classes.buttonCreateRoom}
                        onClick={() => setShowCreateRoom(true)}>Створити кімнату</button>
                }
            </div>
        </div>
    )
}

export default Main;