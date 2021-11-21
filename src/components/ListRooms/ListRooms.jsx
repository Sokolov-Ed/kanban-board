import classes from './ListRooms.module.css';
import Room from './Room/Room';

const ListRooms = (props) => {
    const initRooms = props.listRooms.map(l => (
        <Room key={l.idRoom} idRoom={l.idRoom} nameRoom={l.nameRoom} authorRoom={l.authorRoom} />)
    );
    return (
        <div>
            <button onClick={() => props.addRoom()} className={classes.button}>Add room</button>
            <div className={classes.fieldRooms}>
                {initRooms}
            </div>
        </div>
    )
}

export default ListRooms;