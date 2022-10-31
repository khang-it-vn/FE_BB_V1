import React from "react";
import axios from "axios";
import './listUser.css'
import {withRouter} from "react-router-dom"
class ListUser extends React.Component{
    state = {
        ListUser: []
    }
    async componentDidMount(){
       
        let res = await axios.get("https://reqres.in/api/users?page=2")
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data: []
        })
    }
    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let {ListUser} = this.state;
        return (
            <div className="listuser-container">
                <div className="title">
                    fetch all list user
                </div>
                <div className="list-user-content">
                 { ListUser && ListUser.length > 0 && ListUser.map( (item, index) => {
                            return ( <div className="child" key={item.id} 
                            onClick={() => this.handleViewDetailUser(item)}>
                                        {index+1} - {item.first_name} - {item.last_name}
                                    </div>
                                )})}
                </div>
            </div>
        )
    }
}
export default withRouter( ListUser);