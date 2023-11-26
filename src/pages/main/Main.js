/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useQuery } from "react-query";
import * as s from './MainStyle';
import axios from 'axios';

const Main = () => {

    const [getBoardData, setBoardData] = useState(true);
    const [boardResData, setBoardResData] = useState([]);

    const getBoard = useQuery(["getBoard"], async()=>{

        const response = await axios.get("http://localhost:8080/board");
        setBoardResData(response.data);
    },{
        enabled: getBoardData,
        onSuccess: () => {
            setBoardData(false)
        }
    })

    const clickHandle = () => {
        window.location.href = "http://localhost:3000/write"
    }
    const contentBtn = (boardId) => {
        window.location.href = `http://localhost:3000/view/${boardId}`
    }
    console.log(boardResData)
    return (
        <div css={s.container}>
            
            <button onClick={clickHandle}>글쓰러가기</button>
            <div css={s.contentHeader}>
                <p css={s.contentNum}>No</p>
                <p css={s.contentTitle}>제목</p>
            </div>
            <div css={s.contentBox}>
                {boardResData.map(board => (
                    <div key={board.boardId} onClick={()=>contentBtn(board.boardId)} css={s.content}>
                        <p css={s.margin}>{board.boardId}</p>
                        <p  css={s.contetentButton}>{board.boardTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;