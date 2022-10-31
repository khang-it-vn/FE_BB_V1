import React from "react";
import {withRouter} from 'react-router-dom'

import axios from 'axios';

class DetailUser extends React.Component{
    state = {
        user: {}
    }
  async  componentDidMount()
    {
       try{
        if(this.props.match.params.id)
        {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log(res);
            this.setState({user:res.data.data})
        }
       }catch(err)
       {
        console.log(err);
       }
    }
    handleBack = () =>{
        this.props.history.push(`/user`)
    }
    render() {
        let {user} = this.state;
        console.log(this.props);
        return (
            <div>
                {this.props.match.params.id} 
                <div>username: {user.first_name}</div>
                <div>username: {user.last_name}</div>
               <div> <img src={user.avatar}/></div>
               <div><button type="button" onClick={this.handleBack}>Back</button></div>
            </div>
        );
    }
}

export default withRouter(DetailUser);