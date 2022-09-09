import { useState, useEffect } from 'react';
const LOGIN_URL = '/auth';

const Login = () => {

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);


    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    // }
    
    return (
                <section>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}

export default Login