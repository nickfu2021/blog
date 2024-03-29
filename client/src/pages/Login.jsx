import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
    const [inputs, setInputs] = useState({
        userid: '',
        password: '',
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        //為了不要在 這邊寫 localhost:8800身份驗證, 在 package.json 定義 proxy
        try {
            await login(inputs);
            navigate('/manage/userpassword');
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username" name="userid" onChange={handleChange} />
                <input required type="password" placeholder="password" name="password" onChange={handleChange} />
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>
                    Don't you have an account?<Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
