import styled from 'styled-components';
import '../../styles/theme'

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #718096;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 1020px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    align-items: center;
    justify-content: space-between;

    nav {
        margin-left: 5rem;
        height: 5rem;

        a {
            display: inline-block;
            margin-right: 1.5rem;
            padding: 0 0.5rem;
            position: relative;
            height: 5rem;
            line-height: 5rem;

            & + a {
                margin-left: 2rem;
            }

            &:hover::after {
                content: "";
                height: 3px;
                border-radius: 3px 3px 0 0;
                position: absolute;
                width: 100%;
                bottom: 2px;
                left: 0;
                background: yellow;
                transition:  0.2s;
            }
        }
    }
`;