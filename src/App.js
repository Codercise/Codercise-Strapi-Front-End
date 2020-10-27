import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Navigation from './components/Navigation/Navigation';
import PageContainer from './components/PageContainer/PageContainer';
import PageContent from './components/PageContent/PageContent';

function App(props) {
  const [siteElements, setSiteElements] = useState({
    SiteLogo: {}
  });

  async function getSiteElements() {
    const response = await fetch(`http://localhost:1337/site-elements`);
    const siteElements = await response.json();
    if (siteElements.length > 0) {
      setSiteElements(siteElements[0]);
    }
  }

  useEffect(() => {
    getSiteElements();
  }, []);
  
  return (
    <Router>
      <PageContainer siteElements={siteElements}>
        <Navigation siteName={ siteElements.SiteName } logoPath={siteElements.SiteLogo.url} />

        <Switch>
          <Route path="/about">
            <PageContent path={`about`} />
          </Route>
          <Route path="/contact">
            <PageContent path={`contact`} />
          </Route>
          <Route path="/home">
            <PageContent path={`home`} />
          </Route>
          <Route path="/">
            <PageContent path={`home`} />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}

export default App;
