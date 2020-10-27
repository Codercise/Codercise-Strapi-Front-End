import React from 'react';
import PageContainerStyled from './PageContainerStyles';

function PageContainer(props) {
    return (
        <PageContainerStyled>
            { props.children }
        </PageContainerStyled>
    );
}

export default PageContainer;
