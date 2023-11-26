/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import * as s from "./ViewPostStyle";
import React, { useState } from 'react';
import { useMutation, useQuery } from "react-query";
import axios from "axios";

const ViewPost = () => {
    
    const {boardId} = useParams();
    const [ getBoardRef, setBoardRef ] = useState(true);
    const [ getBoardData, setBoardData ] = useState([]);
    const [ modifyFlag, setModifyFlag ] = useState(false);
    const [ passWordData, setPasswordData ] = useState("");
    const [ passWordRef, setPasswordRef ] = useState(false);
    
    const getBoard = useQuery(["getBoard"], async() => {
        const response = await axios.get(`http://localhost:8080/board/${boardId}`)
        setBoardData(response.data)
    },{
        enabled: getBoardRef,
        onSuccess: () => {
            setBoardRef(false)
        }
    })

    const checkPassword = useQuery(["checkPasswrd"], async() => {
        const data = {
            params : {
                passWordData : passWordData,
                boardId : boardId
            }
        }
        const response = await axios.get("http://localhost:8080/board/checkpassword", data)
        console.log(response.data)
        if(response.data){
            window.location.href = `http://localhost:3000/modify/${boardId}`
        }else{
            alert("비밀번호가 틀렸습니다")
        }
    },{
        enabled:passWordRef,
        onSuccess: () => {
            setPasswordRef(false)
        }
    })
    
    
    const passwordBtn = () => {
        setModifyFlag(!modifyFlag);
    }
    const modifyPasswordOnChange = (e) => {
        setPasswordData(e.target.value)
    }
    const passwordSendBtn = () => {
        setPasswordRef(true);

    }
    const deleteBtn = () => {
        
    }
    
    return (
        <div css={s.container}>
            <div css={s.titleBox}>
                <p>{getBoardData.boardTitle}</p>    
            </div>

            <div css={s.content}>
                <p>{getBoardData.boardContent}</p>
            </div>
            <div css={s.footer}>
                {modifyFlag ? (
                    <>
                        <input type="password" onChange={modifyPasswordOnChange}></input>
                        <button onClick={passwordSendBtn}>확인</button>
                        <button onClick={passwordBtn}>취소</button>
                    </>
                ) : (
                    <button css={s.update} onClick={passwordBtn}>수정하기</button>
                )}
                <button css={s.deleteStyle} onClick={deleteBtn}>삭제하기</button>
            </div>
        </div>
    );
};

export default ViewPost;