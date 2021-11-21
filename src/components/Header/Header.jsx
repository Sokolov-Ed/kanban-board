import classes from "./Header.module.css";
import iconVectorBack from "../../icons/vectorBack.png";
import avaUser from "../../icons/ava.png";
import iconExitSection from "../../icons/output.png";

const Header = () => {
    return (
        <div className={classes.header} >
            <img src={iconVectorBack} className={classes.iconVectorBack} />
            <div className={classes.titleHeader}>Список завдань</div>
            <div className={classes.fieldUser}>
                <img src={avaUser} className={classes.avaUser} />
                <div className={classes.nameUser}>Соколов Едуард</div>
            </div>
            <img src={iconExitSection} className={classes.iconExitSection} />
        </div>
    )
}
export default Header;