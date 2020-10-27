import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Title from '../Title/Title';
import FlexibleContentModule from '../FlexibleContentModule/FlexibleContentModule';

function PageContent(props) {
    const [page, setPage] = useState({});
    const path = `http://localhost:1337/pages?Handle=${props.path}`;

    const location = useLocation();

    async function getPage() {
        const response = await fetch(path);
        const page = await response.json();
        if (page.length > 0) {
        setPage(page[0]);
        }
    }

    useEffect(() => {
        getPage();
    }, [location]);

    return(
        <div>
            <div className="page-content" style={{ marginBottom: 40 }}>
            <Title>
                { page.PageTitle }
            </Title>
            <p>{ page.PageContent }</p>
            <a href={ page.CTALink }>{ page.CTALink }</a>
            </div>
            <div className="flexible-content-modules">
                { page.FlexibleContentModules ? page.FlexibleContentModules.map((contentModule, index) => (
                    <FlexibleContentModule
                        key={contentModule.__component + contentModule.id }
                        contentModule={contentModule}
                    />
                )) : null }
            </div>
            <div className="related-page">
                <ul>
                    { page.RelatedPages ? page.RelatedPages.pages.map((relatedPage) => (
                    <li key={relatedPage.Handle}>
                        <Link to={ `/${relatedPage.Handle}` }>
                        { relatedPage.PageTitle }
                        </Link>
                    </li>
                    )) : null
                    }
                </ul>
            </div>
        </div>
    )
}

export default PageContent;
