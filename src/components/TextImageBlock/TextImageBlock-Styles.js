import styled from 'styled-components';

export const TextImageBlockStyled = styled.div`
    align-items: flex-start;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-bottom: 20px;
    width: 100%;
`;

export const ImageContainer = styled.div`
    background-image: ${props => props.imagePath ? `url(${props.imagePath})` : ""};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-basis: 33%;
    flex-shrink: 1;
    height: 180px;
    width: 250px;
`;

export const Image = styled.img`
`;

export const TextContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-basis: 66%;
    flex-flow: column nowrap;
    justify-content: flex-start;
`;

export const TitleText = styled.p`
    font-size: 32px;
    margin: 0;
    text-align: left;
`;

export const ContentText = styled.p`
    font-size: 18px;
    text-align: left;
`;

export default TextImageBlockStyled;
