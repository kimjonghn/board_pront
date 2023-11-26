/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import * as s from './WriteStyle';

const Write = () => {

    const [data, satData] = useState({title:"", content:"", password:""}) 

    const registerBoard = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type" : "application/json"
            }
        }
        try {
            const response = await axios.post("http://localhost:8080/write",JSON.stringify(data),option)
            alert("등록완료")
            window.location.href="http://localhost:3000/"
            return response;            
        } catch (error) {
            
        }
    })

    const sendButton = () => {
        registerBoard.mutate();
    }

    const writeHandle = (e) => {
        const {name, value} = e.target;
        satData({...data, [name]: value})
    }

    return (
        <div css={s.container}>
            <div css={s.titleBox}>
                <input placeholder='제목을 입력하시오' css={s.titleBoxInput} onChange={writeHandle} name='title'/>
            </div>
            <div css={s.content}>
                <textarea placeholder='내용을 적으세요' css={s.contentInput} onChange={writeHandle} name='content'/>
            </div>
            <div css={s.sendBox}>
                <input type='password' name='password' onChange={writeHandle}/>
                <button css={s.send} onClick={sendButton}>
                    작성완료
                </button>
            </div>
        </div>
    );
};

export default Write;