import styled from "styled-components";

export const DivGeneral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    height: auto;
    color:#FFF;

    img {
        width: 15%;
    }
    p {
        width: 50%;
        text-align: center;
        margin-top: 50px;
    }
`;

export const ListComic = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 1000px;

    h2 {
        text-align: center;
    }

`;

export const UlComic = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: auto;
    padding: 0;
    margin-left: 40px;
`;

export const HqList = styled.li`
    margin-right: 15%;
    list-style-type: disclosure-closed;
    margin-bottom: 5px;

        a {
            text-decoration: none;
            color:#FFF;
        }

        :hover {
            text-decoration: underline;
        }
`;

export const Back = styled.a`
    margin-top: 40px;
    color:#FFF;
    font-size: 24px;
`;