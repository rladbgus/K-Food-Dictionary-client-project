/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

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
                                        this.props.history.push('/signin')
                                    }
                                })
                                .catch(err => console.log(err,
                                    alert('가입에 실패했습니다.')));
                        }}
                    >

                        <div>
                            <input
                                style={{
                                    width: '400px',
                                    height: '30px',
                                    margin: '5px',
                                    borderRadius: '5px'
                                }}
                                type="email"
                                placeholder="Email"
                                onChange={this.handleInputValue('email')}
                            ></input>
                        </div>
                        <div>
                            <input
                                style={{
                                    width: '400px',
                                    height: '30px',
                                    margin: '5px',
                                    borderRadius: '5px'
                                }}
                                onChange={this.handleInputValue('password')}
                                type="password"
                                placeholder="Password"
                            ></input>
                        </div>
                        <div>
                            <input
                                style={{
                                    width: '195px',
                                    height: '30px',
                                    margin: '5px',
                                    borderRadius: '5px'
                                }}
                                onChange={this.handleInputValue('username')}
                                placeholder="Username"
                            ></input>
                            <input
                                style={{
                                    width: '195px',
                                    height: '30px',
                                    margin: '5px',
                                    borderRadius: '5px'
                                }}
                                type="mobile"
                                onChange={this.handleInputValue('mobile')}
                                placeholder="Mobile"
                            ></input>
                        </div>

                        <button
                            style={{
                                width: '200px',
                                height: '30px',
                                margin: '5px',
                                borderRadius: '5px',
                                backgroundColor: 'lightblack'
                            }}
                            type="submit"
                        >
                            Signup
            </button>
                    </form>
                </center>
            </div>
        );
    }
}

export default withRouter(Signup);
