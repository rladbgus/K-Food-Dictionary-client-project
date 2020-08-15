import React from "react";
import { Link } from "react-router-dom";
import crabImg from "../images/crab.jpg"

// 이 페이지는 홈 페이지입니다.
// 대분류 카테고리로써 세가지의 이미지 분류로 나눴습니다.
// 이미지 링크 클릭시 해당 소규모 카테고리로 이동합니다.
// 이미지 클릭시 해당 음식 카테고리로 넘어가는 서버 요청 기능이 필요합니다. 

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Link to="/grainList" className="link">
                    <img id="mainPageImage" src={crabImg} alt="main"></img>
                    GRAIN
                </Link>

                <Link to="/seafoodList" className="link">
                    <img id="mainPageImage" src={crabImg} alt="main"></img>
                    SEAFOOD
                </Link>

                <Link to="/meatList" className="link">
                    <img id="mainPageImage" src={crabImg} alt="main"></img>
                    MEAT
                </Link>
            </div >
        );
    }
}

export default Home;
