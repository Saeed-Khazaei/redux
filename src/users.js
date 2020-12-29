import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './redux/users/userActions';
class users extends Component {
    render() {
        console.log(this.props.users);
        return (
            <>
                <h1>Users</h1>
                <button onClick={() => this.props.getUsers(21)}>Get New users</button>
                {this.props.users && this.props.users.loading && <div className="loader"></div>}
                <ul className='users'>
                    {this.props.users.users && this.props.users.users.length &&
                        this.props.users.users.map(i =>
                            <li key={i.id}>
                                <h3>{i.first_name} {i.last_name}</h3>
                                <img src={i.avatar} alt={i.avatar} />
                            </li>)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, { getUsers })(users);