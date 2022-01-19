import classes from './Room.module.css';
import iconExit from '../../../icons/Exit.png';
import iconShare from '../../../icons/Share.png';
import { NavLink } from 'react-router-dom';

const Room = (props) => {
	return (
		<NavLink to={`/list-rooms/room/${props.idRoom}`}>
			<div className={classes.room}>
				<div className={classes.nameRoom}>{props.nameRoom}</div>
				<div className={classes.authorRoom}>{props.authorRoom}</div>
			</div>
		</NavLink>
	)
}

export default Room;