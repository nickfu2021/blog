import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [inputs, setInputs] = useState({
        userid: '',
        email: '',
        password: '',
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        //為了不要在 這邊寫 localhost:8800身份驗證, 在 package.json 定義 proxy
        try {
            await axios.post('/auth/register', inputs);
            navigate('/login');
        } catch (err) {
            setError(err.response.data);
        }
    };

    // console.log(inputs);

    return (
        <div className="auth">
            <h1>會員註冊</h1>
            <form>
                <input required type="text" placeholder="請輸入帳號" name="userid" onChange={handleChange} />
                <input required type="email" placeholder="請輸入電子信箱" name="email" onChange={handleChange} />
                <input required type="password" placeholder="請輸入密碼" name="password" onChange={handleChange} />
                <button onClick={handleSubmit}>註冊</button>
                {err && <p>{err}</p>}
                <span>
                    Do you have an account?<Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
