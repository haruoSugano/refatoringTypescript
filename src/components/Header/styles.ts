import styled from 'styled-components';

export const Container = styled.main`
    background: #c72828;
    padding: 30px 0;
`;

export const Content = styled.header`
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        div {
            button {
                font-weight: 600;
                border-radius: 8px;
                background: #39b100;
                color: #fff;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        }
    }
`;