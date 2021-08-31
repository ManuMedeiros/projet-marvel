import styled from "styled-components";

export const TitleList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin-top: 3%;
    }

    a {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const HeroList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 99%;
    margin-left: 10px;
    margin-top: 5%;
    
`;

export const HeroBox = styled.a`
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    width: 15%;
    height: 280px;
    padding: 6px;
    background: black;
    color: red;
    margin: 0px 20px 20px 0;
    transition: 0.5s all;

        :hover{
            transform: scale(1.1);
        }

        p {
            text-decoration: none;
            color: red;
            font-weight: bold;
            text-align: center;
            margin: 0;
        }
`;

export const Image = styled.img`
    height: 280px;
    overflow: auto;
`;