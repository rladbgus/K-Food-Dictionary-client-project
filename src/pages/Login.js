/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";


// 이 페이지는 로그인 페이지입니다.
// 테스트는 http://localhost:4000/signin 으로 잘 되는걸 확인했습니다.
// 이메일과 패스워드 입력 후 로그인 버튼 클릭시 로그인이 요청이 보내집니다.
// 로그인시 Mypage로 이동합니다. 

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
                                .post('http://3.34.193.46:5000/user/login', {
                                    email: email,
                                    password: password
                                })
                                .then(() => {
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

                    </form>
                </center>
            </div>
        );
    }
}

// Login.propTypes = {
//     handleIsLoginChange: PropTypes.func,
// };
export default withRouter(Login);

