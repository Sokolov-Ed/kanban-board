import ListRooms from "./ListRooms";
import { connect } from "react-redux";
import { addRoom } from "../../Redux/RoomsReducer";

let mapstateToProps = (state) => {
    return {
        listRooms: state.roomsPage.listRooms
    }
}

export default connect(mapstateToProps, { addRoom })(ListRooms);