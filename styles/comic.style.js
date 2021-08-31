import styled from "styled-components";

export const DivGeneral = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    color: #FFF;

    img {
        width: auto;
        height: 720px;
    }
`;

export const Creators = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;

    li {
        margin-right: 60px;
        list-style-type: disclosure-closed;
    }
`;

export const Prices = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Back = styled.a`
    margin-top: 40px;
    color:#FFF;
    font-size: 24px;
`;