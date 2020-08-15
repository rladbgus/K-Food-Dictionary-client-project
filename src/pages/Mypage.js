import React from "react";

// 이 페이지는 mypage 입니다.
// 아직 기능 구현 전이라 임의의 레이아웃만 짜놨습니다.
// 로그인 상태에서 mypage 이동 시 해당 유저의 인포와 찜 리스트를 서버에서 받아와야 합니다.
// 로그인 안되 있는 상태에서 mypage 들어올 시 로그인 안되어있다는 안내가 있으면 좋을 것 같습니다.

class Mypage extends React.Component {
    render() {

        return (
            <div>
                <h1>Mypage</h1>
                <div className="userInfo">유저 정보입니다</div>
                <div className="favoriteFood">찜한 음식입니다</div>
            </div>
        )
    }
}


export default Mypage;