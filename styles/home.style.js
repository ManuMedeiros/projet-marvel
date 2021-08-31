import styled from "styled-components";

export const DivGeneral = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
`;

export const SearchHero = styled.div`
    margin-top: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60px;
`;

export const Input = styled.input`
    width: 39%;
    height: 40px;
    border: 1px solid #000;
    border-radius: 5px;
`;

export const Button = styled.button`
    background: #000;
    width: 40%;
    height: 40px;
    margin-top: 5px;
    border: 2px solid #FFF;
    border-radius: 5px;
    text-decoration: none;
    color: red;
    font-weight: bold;
    cursor: pointer;
`;
