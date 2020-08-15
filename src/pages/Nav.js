import React from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.jpg";

// 이 페이지는 Nav bar(네비게이션 바) 입니다.
// 각각 링크 클릭 시 홈, 로그인, 회원가입, 마이페이지, 관리자페이지로 이동 가능합니다. 
// 로그인 상태에 따른 네비게이션바 변화가 필요합니다. (ex : 로그인 시 로그아웃 버튼이 보여야 하고, admin(관리자 페이지) 버튼이 보여야 합니다)

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="NavBar">
                    <Link to="/login" className="link" >Login</Link>
                    <Link to="/signup" className="link">Singup</Link>
                    <Link to="/admin" className="link">Admin</Link>
                    <Link to="/mypage" className="link">Mypage</Link>
                    <Link to="/" className="homelink">
                        <img className="mainPageLogo" src={img} alt="logo"></img>
                    </Link>
                </div>
            </div >
        )
    }
}

export default Nav;