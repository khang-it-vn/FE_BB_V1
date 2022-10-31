import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC_doc/randomColor";

class Home extends React.Component {
    componentDidMount(){
        setTimeout(() => {
         //   this.props.history.push("/news")
         const tokenData = localStorage.getItem("accessToken").toString()
         console.log(tokenData);
        }, 3000);
    }
  render() {
    return (
      <div>
        Home page
      </div>
    ); 
  }
}
export default Color(Home);
