import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { isSSR, loadableFallbackTemplate, lazyLoadBottomPageTrigger } from '../common/helper';
import page_meta from '../common/page_meta';
import IApplicationLdJSON from '../common/Contract/IApplicationLdJSON';

import Cookie from '../components/Database/Cookies';

import Bootstrap from '../components/Styled/Boostrap';
import GoogleFontsMontserrat from '../components/Styled/GoogleFontsMontserrat';
import FontAwesomeGlobal from '../components/Styled/FontAwesomeGlobal';
import FontAwesomeNavigationBar from '../components/Styled/FontAwesomeNavigationBar';
import FontAwesomeFooter from '../components/Styled/FontAwesomeFooter';
import FontAwesomeNightShiftMode from '../components/Styled/FontAwesomeNightShiftMode';
import FontAwesomeSkillTechnology from '../components/Styled/FontAwesomeSkillTechnology';
import Global from '../components/Styled/Global';
import GlobalNight from '../components/Styled/GlobalNight';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import PageLayout from '../components/PageLayout/PageLayout';
import Section from '../components/Section/Section';
import Author from '../components/Author/Author';
import LazyLoadBlock from '../components/LazyLoadBlock/LazyLoadBlock';
import NightShiftMode from '../components/FloatingActionButton/NightShiftMode';

const Headline = loadable(() => import('../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const StatusPieChart = loadable(() => import('../components/SkillTechnology/Chart/StatusPieChart'), { fallback: loadableFallbackTemplate(`#skill-technology-chart-status-pie-chart-component`) });
const SkillTechnology = loadable(() => import('../components/SkillTechnology/SkillTechnology'), { fallback: loadableFallbackTemplate(`#skill-technology`) });
const Statement = loadable(() => import('../components/Statement/Statement'), { fallback: loadableFallbackTemplate(`#statement-component`) });
const Footer = loadable(() => import('../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

const Ads = loadable(() => import('../components/Ads/Ads'), { fallback: loadableFallbackTemplate(`#ads-component`) });
const GoogleAdsense = loadable(() => import('../components/Ads/GoogleAdsense/GoogleAdsense'), { fallback: null });
const GoogleAdsenseResponsiveAds = loadable(() => import('../components/Ads/GoogleAdsense/GoogleAdsenseResponsiveAds'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-responsive-ads-component`) });
const GoogleGlobalSiteTag = loadable(() => import('../components/Analytics/GoogleGlobalSiteTag/GoogleGlobalSiteTag'), { fallback: null });

export default (): JSX.Element => {

  const pageTitle: string = page_meta.title.main;
  const currentLocationURL: React.MutableRefObject<any> = useRef('/');
  const cookie: React.MutableRefObject<any> = useRef(null);

  const [lazyLoadBlocks, setLazyLoadBlocks] = useState({
    isDone: false,
    items: [false]
  });

  const [nightShiftMode, setNightShiftMode] = useState(false);

  useEffect(() => {

    if (!isSSR()) {
      if (!cookie.current) {
        currentLocationURL.current = document.location.href;
        cookie.current = new Cookie();
        if (cookie.current.get(NightShiftMode.COOKIE_NAME) === 'yes') {
          setNightShiftMode(true);
        }
      }
    }

    return () => {};

  }, []);

  useEffect(() => {

    const lazyloadTrigger = lazyLoadBottomPageTrigger(lazyLoadBlocks, (state: any) => {
      setLazyLoadBlocks(state);
    });

    return () => { lazyloadTrigger.unsubscribe(); };

  }, [lazyLoadBlocks]);

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL.current,
    "name": pageTitle,
    "author": page_meta.author,
    "image": page_meta.image.src,
    "description": page_meta.description
  };

  return (
    <React.Fragment>
      
      <LazyLoadBlock id="c1" visibilityFlag={true}>
        
        <Helmet defer={false}>
          <html lang="en" />
          
          <title>{pageTitle}</title>

          <link rel="shortcut icon" href={page_meta.favicon} />  
          <link rel="apple-touch-icon" href={page_meta.favicon} />

          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index" />
          <meta name="author" content={page_meta.author} />
          <meta name="description" content={page_meta.description} />
          <link rel="canonical" href={currentLocationURL.current} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={page_meta.twitter.site} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={page_meta.description} />
          <meta name="twitter:creator" content={page_meta.twitter.creator} />
          <meta name="twitter:image" content={page_meta.image.src} />
          <meta name="twitter:image:alt" content={page_meta.image.alt} />

          <meta name="og:url" content={currentLocationURL.current} />
          <meta name="og:type" content="website" />
          <meta name="og:title" content={pageTitle} />
          <meta name="og:image" content={page_meta.image.src} />
          <meta name="og:description" content={page_meta.description} />

          <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

          <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/resources/img/author/profile-tianzifang-min-super.jpg" as="image" crossOrigin="anonymous" />
        </Helmet>

        <Bootstrap />
        <GoogleFontsMontserrat />
        <FontAwesomeGlobal />
        <FontAwesomeNavigationBar />
        <FontAwesomeNightShiftMode />
        <Global />

      </LazyLoadBlock>

      <LazyLoadBlock id="c2" visibilityFlag={nightShiftMode}>
        <GlobalNight />
      </LazyLoadBlock>

      <LazyLoadBlock id="c3" visibilityFlag={true}>
        <NavigationBar />
        <NightShiftMode onToggle={(isToggled: boolean) => { setNightShiftMode(isToggled); }} />
      </LazyLoadBlock>

      <LazyLoadBlock id="l1" visibilityFlag={lazyLoadBlocks.items[0]}>
        <Headline />
      </LazyLoadBlock>

      <PageLayout>
      
        <LazyLoadBlock id="c4" visibilityFlag={true} reRender={nightShiftMode}>
          <Section 
            isNightShiftMode={nightShiftMode}
            id="author" 
            title="HELLO, WORLD!" 
            showThematicBreak={true} 
            showBorderTop={true}>
            <Author />
          </Section>
        </LazyLoadBlock>

        <LazyLoadBlock id="l2" visibilityFlag={lazyLoadBlocks.items[0]} reRender={nightShiftMode}>
          <FontAwesomeSkillTechnology />
          <FontAwesomeFooter />
        </LazyLoadBlock>
        
        <LazyLoadBlock id="l3" visibilityFlag={lazyLoadBlocks.items[0]} reRender={nightShiftMode}>
          <Section 
            isNightShiftMode={nightShiftMode}
            id="skills-technologies" 
            title="SKILLS | TECHNOLOGIES" 
            showThematicBreak={true} 
            showBorderTop={true}>
            <StatusPieChart isNightShiftMode={nightShiftMode} />
            
            <LazyLoadBlock id="l4" visibilityFlag={lazyLoadBlocks.items[0]} reRender={false}>
              <SkillTechnology />
            </LazyLoadBlock>

          </Section>
        </LazyLoadBlock>

        <LazyLoadBlock id="l5" visibilityFlag={lazyLoadBlocks.items[0]}>
          <Section 
            id="section-skip-1" 
            title="" 
            showThematicBreak={false} 
            showBorderTop={true}>
            {/* Line Item: LordDashMe_Horizontal_Home */}
            <Ads appearance="horizontal">
              <GoogleAdsenseResponsiveAds 
                adClient={'ca-pub-3427694918014398'}
                adSlot={'4220072227'} />
            </Ads>
            <Statement />
          </Section>
        </LazyLoadBlock>
        
      </PageLayout>

      <LazyLoadBlock id="l6" visibilityFlag={lazyLoadBlocks.items[0]}>
        <Footer isFixedPosition={false}/>
        <GoogleAdsense />
      </LazyLoadBlock>

      <LazyLoadBlock id="c5" visibilityFlag={true}>
        <GoogleGlobalSiteTag trackingId={'UA-128894279-1'} />
      </LazyLoadBlock>

    </React.Fragment>
  );

};
