import '../assets/Login.css';

const Login = () => {
    return(
        <div id="id01" className="modal">
            <form className="modal-content animate" action='/dashboard'>
                <div className="container">
                    <label id='username' htmlFor="uname"><strong>Username</strong></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                    <label id='pw' htmlFor="psw"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                    <button type="submit" className='submitBtn'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;