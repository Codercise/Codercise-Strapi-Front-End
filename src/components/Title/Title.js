import React from 'react';
import PageTitleStyled from './Title-Styles';

function Title(props) {
    return (
        <PageTitleStyled>
            { props.children }
        </PageTitleStyled>
    )
}

export default Title;
