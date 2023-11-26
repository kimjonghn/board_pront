/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./ModifyStyle";
import React, { useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const Modify = () => {

    const {boardId} = useParams();
    const [getBoardRef, setBoardRef] = useState(true);
    const [getBoardData, setBoardData] = useState({title:" ", content:" "});
    // const [data, setData] = useState();

    const getBoard = useQuery(["getBoard"], async() => {
        const response = await axios.get(`http://localhost:8080/board/${boardId}`)
        setBoardData(response.data)
        return response;
    },{enabled : getBoardRef,
        onSuccess: () => {
            setBoardRef(false)
        }
    })
    if(getBoard.isLoading) {
        return <div>로딩중...</div>;
    }

    const writeHandle = (e) => {
        const {name, value} = e.target;
        setBoardData({...getBoardData, [name]: value})
        console.log(getBoardData)
    }
    const sendButton = () => {

    }

    return (
        <div css={s.container}>
            <div css={s.titleBox}>
                <input placeholder="제목을 입력하시오" css={s.titleBoxInput} onChange={writeHandle} name='title' value={getBoardData.boardTitle}/>
            </div>
            <div css={s.content}>
                <textarea placeholder='내용을 적으세요' css={s.contentInput}  onChange={writeHandle} name='content' value={getBoardData.boardContent}/>
            </div>
            <div css={s.sendBox}>
                <button css={s.send} onClick={sendButton}>
                    수정완료
                </button>
            </div>
        </div>
    );
};

export default Modify;