import React from 'react';
import { TextImageBlockStyled, ImageContainer, Image, TextContainer, TitleText, ContentText } from './TextImageBlock-Styles';

function TextImageBlock(props) {
    const { contentModule } = props;
    return (
        <TextImageBlockStyled key={`${contentModule.__component}-${contentModule.id}`}>
            <ImageContainer imagePath={ 'http://localhost:1337' + contentModule.Image.url }>
                <Image className="sr-only" alt={ contentModule.Title } src={ 'http://localhost:1337' + `${contentModule.Image.url}` } />
            </ImageContainer>
            <TextContainer>
                <TitleText>{ contentModule.Title }</TitleText>
                <ContentText>{ contentModule.Content }</ContentText>
            </TextContainer>
        </TextImageBlockStyled>
    )
}

export default TextImageBlock;
