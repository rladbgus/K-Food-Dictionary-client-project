import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import GrainList from "./MainPageList/GrainList"
import MeatList from "./MainPageList/MeatList"
import SeaList from "./MainPageList/SeaList"
import Home from "./Home"
import Contents from "./Contents"
import Mypage from "./Mypage"
import Admin from "./Admin"

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="mainPageBox">
                    <Switch>
                        <Route path="/admin"><Admin /></Route>
                        <Route path="/mypage"><Mypage /></Route>
                        <Route path="/contents"><Contents /></Route>
                        <Route path="/signin"><Login /></Route>
                        <Route path="/signup"><Signup /></Route>
                        <Route path="/grain"><GrainList /></Route>
                        <Route path="/meat"><MeatList /></Route>
                        <Route path="/seafood"><SeaList /></Route>
                        <Route path="/"><Home /></Route>
                    </Switch>
                </div>
            </div >
        );
    }
}

export default Main;