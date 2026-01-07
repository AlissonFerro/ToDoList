import styled from "styled-components";

export const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eaeaeaff;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #dcdcdc;
    width: 50%;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const RowHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Void = styled.div``;