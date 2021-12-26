import classes from './ListRooms.module.css';
import Room from './Room/Room';
import { Navigate } from 'react-router-dom';

const ListRooms = ({authorization, ...props}) => {
    if(!authorization.isAuth){
        return <Navigate replace to="/login" />
    }
    let initRooms = props.listRooms;
    if(authorization.authorized.isTeacher){
        initRooms = initRooms.filter(f => f.idUser === authorization.authorized.idUser).map(l => (
            <Room key={l.idRoom} idRoom={l.idRoom} idUser={l.idUser} nameRoom={l.nameRoom} authorRoom={l.authorRoom} />)
        );
    }
    else {
        initRooms = initRooms.map(l => (
            <Room key={l.idRoom} idRoom={l.idRoom} idUser={l.idUser} nameRoom={l.nameRoom} authorRoom={l.authorRoom} />)
        );
    }
    return (
        <div>
            <div className={classes.fieldRooms}>
                {initRooms}
            </div>
        </div>
    )
}

export default ListRooms;