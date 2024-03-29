import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';

const UserPassword = () => {
    const { currentUser } = useContext(AuthContext);

    const [res, setRespone] = useState();

    const [inputs, setInputs] = useState({
        userid: currentUser?.PY_001_USID,
        // username: '',
        oldpassword: '',
        password: '',
        checkpassword: '',
    });

    const handleChange = e => {
        //這邊用參數 e 表示 username、oldpassword、password、checkpassword
        //就不用重複寫 const [property, setProperty] = useState();
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));

        //有重新輸入就把錯誤訊息洗掉，可加可不加，有些政府網站好像不會清
        setRespone('');
    };

    const handleSubmit = async e => {
        try {
            const res = await axios.post('/users/', inputs);
            setRespone(res.data);

            //submit成功，重新設定預設值，記得html元素要有value 屬性才吃的到
            //而且如果這邊預設值只給 oldpassword、password、checkpassword
            //再下一次 submit 會沒有 username property
            setInputs({ userid: currentUser?.PY_001_USID, oldpassword: '', password: '', checkpassword: '' });
        } catch (err) {
            setRespone(err.response.data);
            setInputs({ userid: currentUser?.PY_001_USID, oldpassword: '', password: '', checkpassword: '' });
        }
    };

    return (
        <div
            className="UserPassword"
            onClick={() => {
                let e = document.querySelector('#menu-1');
                if (!e.classList.contains('st-move')) {
                    document.getElementById('menu-1').classList.toggle('st-move');
                }
            }}
        >
            <h2>密碼更新</h2>
            <hr />
            <input type="text" placeholder="帳號" disabled="disabled" name="userid" defaultValue={currentUser?.PY_001_USID} onChange={handleChange} />

            <input type="text" placeholder="電子信箱" disabled="disabled" name="email" defaultValue={currentUser?.PY_001_MAIL} />

            <input type="password" placeholder="舊密碼" name="oldpassword" value={inputs.oldpassword} onChange={handleChange} />

            <input type="password" placeholder="新密碼" name="password" value={inputs.password} onChange={handleChange} />

            <input type="password" placeholder="再次輸入新密碼" name="checkpassword" value={inputs.checkpassword} onChange={handleChange} />

            {res && <p className="respone">{res}</p>}
            <input type="button" id="btn_OKY" className="submit" value="存檔" onClick={handleSubmit} />
        </div>
    );
};

export default UserPassword;
