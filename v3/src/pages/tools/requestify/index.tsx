import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../../common/helper';
import WEBSITE_PAGE_META from '../../../common/Website/page_meta';
import IApplicationLdJSON from '../../../common/Contract/IApplicationLdJSON';

import Section from '../../../components/Section/Section';

import RequestifyForm from '../components/RequestifyForm/RequestifyForm';

const NavigationBar = loadable(() => import('../../../components/NavigationBar/NavigationBar'), { fallback: loadableFallbackTemplate(`#navigation-bar-component`) });
const Headline = loadable(() => import('../../../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const PageWrapper = loadable(() => import('../../../components/PageWrapper/PageWrapper'), { fallback: loadableFallbackTemplate(`#page-wrapper-component`) });
const Footer = loadable(() => import('../../../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });
const GoogleAnalytics = loadable(() => import('../../../components/Analytics/GoogleAnalytics/GoogleAnalytics'), { fallback: loadableFallbackTemplate(`#analytics-google-analytics-component`) });
const PageView = loadable(() => import('../../../components/Analytics/GoogleAnalytics/PageView'), { fallback: loadableFallbackTemplate(`#analytics-google-analytics-page-view-component`) });

const Tools = (): JSX.Element => {

  const pageTitle: string = 'Requestify | Tools';
  
  let currentLocationURL: string = '/tools/requestify';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": pageTitle,
    "author": WEBSITE_PAGE_META.author,
    "image": WEBSITE_PAGE_META.image.src,
    "description": WEBSITE_PAGE_META.description
  };
  
  return (
    <React.Fragment>
      
      <Helmet defer={false}>
        <html lang="en" />
        
        <title>{pageTitle}</title>

        <link rel="shortcut icon" href={WEBSITE_PAGE_META.favicon} />  
        <link rel="apple-touch-icon" href={WEBSITE_PAGE_META.favicon} />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content={WEBSITE_PAGE_META.author} />
        <meta name="description" content={WEBSITE_PAGE_META.description} />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={WEBSITE_PAGE_META.twitter.site} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={WEBSITE_PAGE_META.description} />
        <meta name="twitter:creator" content={WEBSITE_PAGE_META.twitter.creator} />
        <meta name="twitter:image" content={WEBSITE_PAGE_META.image.src} />
        <meta name="twitter:image:alt" content={WEBSITE_PAGE_META.image.alt} />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content={WEBSITE_PAGE_META.image.src} />
        <meta name="og:description" content={WEBSITE_PAGE_META.description} />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" type="text/css" />
        <link rel="stylesheet" href="/resources/vendor/fontawesome-free-5.10.2-web/css/all.min.css" type="text/css"></link>
        <link rel="stylesheet" href="/resources/vendor/bootstrap-3.3.7/css/bootstrap.min.css" type="text/css"></link>
        <link rel="stylesheet" href="/resources/css/global.min.css" type="text/css"></link>
      </Helmet>

      <NavigationBar />
      <Headline />
      <PageWrapper>
        <Section 
          id="requestify"
          title="REQUESTIFY"
          showThematicBreak={false}
          showBorderTop={false}>
          <RequestifyForm />
        </Section>
      </PageWrapper>
      <Footer isFixedPosition={false}/>

      <GoogleAnalytics>
        <PageView trackingId={'UA-128894279-1'} />
      </GoogleAnalytics>

    </React.Fragment>
  );
}

export default Tools;
