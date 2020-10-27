import React, { useState, useEffect } from 'react';
import { NavigationWrapper, LogoContainer, Logo, NavigationList, NavigationListItem, NavigationLink } from './NavigationStyles';

function Navigation(props) {
    const [navigationLinks, setNavigationLinks] = useState([]);
    const path = `http://localhost:1337/primary-navigations`;

    async function getNavigation() {
        const response = await fetch(path);
        const navigationLinks = await response.json();
        if (navigationLinks.length > 0) {
            setNavigationLinks(navigationLinks);
        }
    }

    useEffect(() => {
        getNavigation();
    }, []);
    return(
        <NavigationWrapper>
            <LogoContainer>
                <Logo logoPath={ 'http://localhost:1337' + props.logoPath } />
            </LogoContainer>
            <NavigationList>
                { navigationLinks.map((link, index) => (
                    <NavigationListItem key={link.Title}>
                        <NavigationLink to={'/' + link.PageLink.Handle}>{ link.Title }</NavigationLink>
                    </NavigationListItem>
                )) }
            </NavigationList>
        </NavigationWrapper>
    )
}

export default Navigation;
