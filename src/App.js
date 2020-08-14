import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import axios from "axios";
import NavTop from "./pages/NavTop";
import Main from "./pages/Main";
import "./App.css";


class App extends React.Component {
  state = {
    isLogin: false,
    userinfo: {}
  }

  handleIsLoginChange() {
    this.setState({ isLogin: true });
    axios.get('http://3.34.193.46:5000/user').then(res => {
      console.log(res.data);
      this.setState({ userinfo: res.data });
    });
  }


  render() {
    const { isLogin, userinfo } = this.state;
    return (

      <div>
        <BrowserRouter>
          <NavTop></NavTop>

          <Main>
            <Switch>
              <Route
                path="/login"
                render={() => (
                  <Login
                    isLogin={isLogin}
                    handleIsLoginChange={this.handleIsLoginChange.bind(this)}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={() => <Signup isLogin={isLogin} />}
              />
              <Route
                exact
                path="/mypage"
                render={() => <Mypage isLogin={isLogin} userinfo={userinfo} />}
              />
              <Route
                path="/"
                render={() => {
                  if (isLogin) {
                    return <Redirect to="/mypage" />;
                  }
                  return <Redirect to="/login" />;
                }}
              />
            </Switch>

          </Main>


        </BrowserRouter>
      </div>
    );
  }
}
export default App;