import React from 'react';
import ReactMarkdown from 'react-markdown';
import { RichTextBlockContainer, RichTextBlockTitle, RichTextBlockContent } from './RichTextBlock-Styles';

function RichTextBlock(props) {
    const { contentModule } = props;
    return (
        <RichTextBlockContainer>
            <RichTextBlockTitle>{ contentModule.Title }</RichTextBlockTitle>
            <RichTextBlockContent>
                <ReactMarkdown>
                    { contentModule.Content }
                </ReactMarkdown>
            </RichTextBlockContent>
        </RichTextBlockContainer>
    )
}

export default RichTextBlock;
