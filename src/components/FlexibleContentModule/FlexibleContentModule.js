import React from 'react';
import TextImageBlock from '../TextImageBlock/TextImageBlock';
import RichTextBlock from '../RichTextBlock/RichTextBlock';

function FlexibleContentModule(props) {
    const { contentModule } = props;

    switch(contentModule.__component) {
        case 'flexible-content-modules.text-image-component':
            return <TextImageBlock contentModule={contentModule} />
        
        case 'flexible-content-modules.rich-text-component':
            return <RichTextBlock contentModule={contentModule} />
        default:
            return <div><h1>Component not found</h1></div>;
    }
}

export default FlexibleContentModule;
