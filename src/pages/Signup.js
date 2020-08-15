/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";

// 이 페이지는 회원가입 페이지입니다.
// 테스트는 http://localhost:4000/signup 으로 잘 되는걸 확인했습니다.

axios.defaults.withCredentials = true;
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            mobile: ''
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = key => e => {
        this.setState({ [key]: e.target.value });
    };
    render() {
        const { email, password, mobile, username } = this.state;
        return (
            <div>
                <center>
                    <h1>Sign Up</h1>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            axios
                                .post('http://3.34.193.46:5000/user/signup', this.state)
                                .then(res => {
                                    if (res.status === 200) {
                                        alert('가입이 완료되었습니다^^')
                                        this.props.history.push('/login')
                                    }
                                })
                                .catch(err => console.log(err,
                                    alert('가입에 실패했습니다.')));
                        }}
                    >

                        <div>
                            <input className="inputForm"
                                placeholder="Username"
                                onChange={this.handleInputValue('username')}
                            >
                            </input>
                        </div>

                        <div>
                            <input className="inputForm" type="email"
                                placeholder="Email"
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
                            Signup
                        </button>
                    </form>
                </center>
            </div >
        );
    }
}

export default withRouter(Signup);
