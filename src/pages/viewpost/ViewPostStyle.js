import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 100vh;
    border: 1px solid;
    margin: auto;
`
export const titleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 100px;
    border: 1px solid black;
    font-size: 40px;
`

export const content = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 500px;
    border: 1px solid black;
    font-size: 15px;
    `
export const footer = css`
    display: flex;

`
export const update = css`
    border: 1px solid black;
    margin-top: 50px;
    margin-right: 10px;
    background-color: white;
    &:hover{
        background-color: black;
        color: white;
    }
    &:active{
        background-color: white;
        color: black;
    }
`

export const deleteStyle = css`
    border: 1px solid black;
    margin-top: 50px;
    background-color: white;
    &:hover{
        background-color: black;
        color: white;
    }
    &:active{
        background-color: white;
        color: black;
    }
`