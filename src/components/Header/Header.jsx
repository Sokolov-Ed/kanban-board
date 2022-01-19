import classes from "./Header.module.css";
import iconVectorBack from "../../icons/vectorBack.png";
import avaUser from "../../icons/ava.png";
import iconExitSection from "../../icons/output.png";
import vertLine from "../../icons/vertLine.png";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Header = ({ header, authorization, ...props }) => {
    const navigate = useNavigate();
    return (
        <div className={classes.header} >
            <img src={iconVectorBack} className={!header.isMainPage ? classes.iconVectorBack : classes.plug}
                onClick={() => navigate(-1)} />
            <div className={classes.titleHeader}>
                {header.isMainPage && <div>Головна</div>}
                {header.isListRoomsPage && <div>Список кімнат</div>}
                {header.isListTasksPage && <div>Список завдань</div>}
                {header.isTaskPage && <div>{header.nameRoom}</div>}
            </div>
            {authorization.isAuth && <>
                <div className={classes.fieldUser}>
                    <img src={avaUser} className={classes.avaUser} />
                    <div className={classes.nameUser}>{authorization.authorized.userName}</div>
                </div>
                <img src={iconExitSection} className={classes.iconExitSection}
                    onClick={props.logout} />
            </>}
        </div>
    )
}
export default Header;