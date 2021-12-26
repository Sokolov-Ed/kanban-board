import React from 'react';
import ListRooms from "./ListRooms";
import { connect } from "react-redux";
import { addRoom } from "../../Redux/RoomsReducer";
import { setListRoomsPage } from '../../Redux/HeaderReducer';

class ListRoomsContainer extends React.Component {
    componentDidMount() {
        this.props.setListRoomsPage();
    }
    render() {
        return (
            <ListRooms listRooms={this.props.listRooms} authorization={this.props.authorization}/>
        )
    }
}

let mapstateToProps = (state) => {
    return {
        listRooms: state.roomsPage.listRooms,
        authorization: state.authorization
    }
}

export default connect(mapstateToProps, { setListRoomsPage })(ListRoomsContainer);