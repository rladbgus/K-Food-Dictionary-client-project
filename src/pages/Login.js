/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Facebook from "./Facebook";

axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };


  render() {
    const { email, password } = this.state;
    const { handleIsLoginChange } = this.props;

    return (
      <div>
        <center>

          <h1>Login</h1>

          <form
            onSubmit={e => {
              e.preventDefault();
              return axios
                .post('/user/login', {
                  email: email,
                  password: password
                })
                .then((res) => {
                  localStorage.setItem('user', JSON.stringify(res.data.token));
                  handleIsLoginChange();
                  this.props.history.push('/mypage');
                })
                .catch(err => console.log(err));
            }}
          >
            <div>
              <input className="inputForm"
                type="email"
                placeholder="Eamil"
                onChange={this.handleInputValue('email')}>
              </input>
            </div>

            <div>
              <input className="inputForm"
                type="password"
                placeholder="Password"
                onChange={this.handleInputValue('password')}>
              </input>
            </div>
            <button className="button" type="submit">
              Login
            </button>

            <span className="fbLogin">
              <Facebook />
            </span>

          </form>
          {/* 밑의 구글로그인 부분은 a태그로 무조건 감싸져야 합니다. -현진- */}
          <a href="http://3.34.193.46.xip.io:5000/auth/google"> 구글로그인 </a>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);

