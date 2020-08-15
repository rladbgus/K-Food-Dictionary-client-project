import React from "react";

// 이 페이지는 관리자 페이지입니다. 
// 아직 기능 구현 전이라 임의의 입력 폼 레이아웃만 짜놨습니다.

class Admin extends React.Component {
    render() {
        return (
            <div>
                <h1>Admin page</h1>
                <center>
                    <div>
                        <input className="inputForm"
                            type="foodPicture"
                            placeholder="food picture">
                        </input>
                    </div>

                    <div>
                        <input className="inputForm"
                            type="foodName"
                            placeholder="food name">
                        </input>
                    </div>

                    <div>
                        <input className="inputForm"
                            type="foodInfo"
                            placeholder="food info">
                        </input>
                    </div>

                    <div>
                        <input className="inputForm"
                            type="tip"
                            placeholder="tip">
                        </input>
                    </div>

                    <div>
                        <input className="inputForm"
                            type="spicy"
                            placeholder="spicy">
                        </input>
                    </div>
                </center>
            </div>
        )
    }
}


export default Admin;