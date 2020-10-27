import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.div`
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    height: 80px;
`;

export const LogoContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-right: 16px;
`;

export const Logo = styled.div`
    background-image: ${props => props.imagePath ? `url(${props.imagePath})` : ""};
    background-size: cover;
    height: 80px;
    display: block;
    width: 80px;
`;

export const NavigationList = styled.ul`
    align-items: stretch;
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const NavigationListItem = styled.li`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    margin-right: 8px;
    padding: 0;
`;

export const NavigationLink = styled(Link)`
    border: 1px solid black;
    display: block;
    padding: 8px;
`;
