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

export const contentBox = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 700px;
    height: 600px;
    border: 1px solid black;
`;

export const contentHeader = css`
    display: flex;
    width: 700px;
    height: 40px;
`;

export const contentNum = css`
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
`;

export const contentTitle = css`
    width: 550px;
    height: 40px;
    display: flex;
    justify-content: center;
`;

export const contentDate = css`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
`;

export const content = css`
    display: flex;
    justify-content: space-between;
    width: 700px;
    height: 50px;

    border: 1px solid black;
`;

export const margin = css`
    margin-left: 10px;
`;
export const margin2 = css`
    margin-right: 10px;
`;
export const contetentButton = css`
    border: none;
    background-color: white;
    &:hover{
        font-size: 15px;
    }
    &:active{
        font-size: 15px;
        font-weight: 700;
    }
`