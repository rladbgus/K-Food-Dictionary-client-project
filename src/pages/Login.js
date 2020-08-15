// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.withCredentials = true;

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', props)

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
        console.log('fffffffffff', this)
        console.log(this.props)
        const { email, password } = this.state;
        const { handleIsLoginChange } = this.props;
        console.log(this.props)
        return (
            <div>
                <center>
                    <h1>Member Login</h1>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            return axios
                                .post('http://3.34.193.46:5000/user/login', {
                                    email: email,
                                    password: password
                                })
                                .then((data) => {
                                    console.log(data)
                                    handleIsLoginChange(data);
                                    this.props.history.push('/');
                                })
                                .catch(err => console.log(err));
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
                                placeholder="Eamil"
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
                                type="password"
                                placeholder="Password"
                                onChange={this.handleInputValue('password')}
                            ></input>
                        </div>
                        <button
                            style={{
                                width: '200px',
                                height: '30px',
                                margin: '5px',
                                borderRadius: '5px',
                                backgroundColor: 'lightblack',
                                color: "black"
                            }}
                            type="submit"
                        >
                            Login
                </button>
                    </form>
                </center>
            </div>
        );
    }
}

Login.propTypes = {
    handleIsLoginChange: PropTypes.func,
};
export default withRouter(Login);

