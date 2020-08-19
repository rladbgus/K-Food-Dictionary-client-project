import React from 'react';
import { Link } from "react-router-dom";
import img from "../images/logo.jpg";

class LogInNav extends React.Component {
    render() {
      console.log(this.props.email,'logout');
      const adminEmail = ['wmc15156@naver.com', 'wmc1415@naver.com', 'samiosae@gmail.com','bbirds94@gmail.com','cocokiuuu1858@gmail.com'];
      const checkEmail = adminEmail.includes(this.props.email);
      console.log(checkEmail);
        return (
            <div>
                <div className="NavBar">
                <Link to="/admin" className="link">{checkEmail === true ? 
                'Admin' : 
                null  
              }</Link>
                    <Link to="/mypage" className="link">Mypage</Link>
                    <Link to="/logout" className="link" >Logout</Link>
                    <Link to="/" className="homelink">
                        <img className="mainPageLogo" src={img} alt="logo"></img>
                    </Link>
                </div>
            </div >
        );
    }
}

export default LogInNav;