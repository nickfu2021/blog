import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryEdit = () => {
    const navigate = useNavigate();
    const [resData, setResData] = useState();

    const state = useLocation().state;
    const po_001_cat1 = state?.po_001_cat1;
    const po_001_cnam = state?.po_001_cnam;

    const [inputs, setInputs] = useState({
        cat1: po_001_cat1,
        cnam: po_001_cnam,
    });

    const toInputUppercase = e => {
        e.target.value = e.target.value.toUpperCase();
    };

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setResData(null);
    };

    const handleClickSave = async e => {
        e.preventDefault();
        try {
            const res = state
                ? await axios.put(`/category/editCategories/${po_001_cat1}`, { cnam: inputs.cnam })
                : await axios.post('/category/addCategories', inputs);
            alert(res.data);
            navigate('/manage/category');
        } catch (err) {
            console.log(err);
            setResData(err.response.data);
        }
    };

    const handleClickDelete = async e => {
        e.preventDefault();
        try {
            const res = await axios.delete(`/category/delCategories/${inputs.cat1}`);
            alert(res.data);
            navigate('/manage/category');
        } catch (err) {
            console.log(err);
            setResData(err.response.data);
        }
    };

    const handClickCancle = () => {
        navigate('/manage/category');
    };

    return (
        <div
            className="categoryedit"
            onClick={() => {
                if (!document.querySelector('#menu-1').classList.contains('st-move')) {
                    document.querySelector('#menu-1').classList.toggle('st-move');
                }
            }}
        >
            <div className="container">
                <div className="title">
                    <h2>文章分類主項維護</h2>
                    <hr></hr>
                </div>
                <form className="showdata">
                    <input
                        type="text"
                        name="cat1"
                        placeholder="分類代號"
                        onInput={toInputUppercase}
                        defaultValue={po_001_cat1}
                        onChange={handleChange}
                        disabled={state ? true : false}
                    />
                    <input type="text" name="cnam" placeholder="分類中文" defaultValue={po_001_cnam} onChange={handleChange} />
                    {resData && <p>{resData}</p>}
                </form>
                <button onClick={handleClickSave}>存檔</button>
                <button onClick={handleClickDelete}>刪除</button>
                <button onClick={handClickCancle}>取消</button>
            </div>
        </div>
    );
};

export default CategoryEdit;
