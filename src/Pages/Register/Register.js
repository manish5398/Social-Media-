import './Register.css'

const Register = () => {
    return (
        <div className='login'>
            <div className="loginwrapper">
                <div className="loginLeft">
                    <h3 className="loginlogo">Yanlack</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Yanlack.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Username' className="loginInput" />
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <input placeholder='Password Again' className="loginInput" />
                        <button className="loginBtn">Sign Up</button>
                        {/* <span className="loginForgot">Forgot Password</span> */}
                        <button className="loginRegisterButton">Login Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
