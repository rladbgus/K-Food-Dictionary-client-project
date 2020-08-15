import React from "react";

// 이 페이지는 콘텐츠 페이지입니다. 
// 아직 기능 구현 전이라 임의의 레이아웃만 짜놨습니다.

class Contents extends React.Component {
    render() {
        return (
            <div>
                <div id="leftSection">음식영상입니다</div>
                <div id="rightSection">음식정보입니다</div>
                <div id="videoList">비디오리스트입니다</div>
            </div>
        )
    }
}

export default Contents;

