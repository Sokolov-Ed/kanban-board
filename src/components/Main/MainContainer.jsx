import React from 'react';
import { connect } from 'react-redux';
import { setMainPage } from '../../Redux/HeaderReducer';
import { addRoom, setShowCreateRoom } from '../../Redux/RoomsReducer';
import Main from './Main';

class MaonContainer extends React.Component {
    componentDidMount() {
        this.props.setMainPage();
    }
    render() {
        return (
            <Main authorization={this.props.authorization} setShowCreateRoom={this.props.setShowCreateRoom}
                isShowCreateRoom={this.props.isShowCreateRoom} addRoom={this.props.addRoom}/>
        )
    }
}

let mapStateToProps = (state) => ({
    header: state.header,
    authorization: state.authorization,
    isShowCreateRoom: state.roomsPage.isShowCreateRoom,
})

export default connect(mapStateToProps, { setMainPage, setShowCreateRoom, addRoom })(MaonContainer);