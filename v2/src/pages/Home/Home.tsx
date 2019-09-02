import React, { useState, useEffect } from 'react';

import Loader from '../../components/Loader/Loader';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Section from '../../components/Section/Section';
import Author from '../../components/Author/Author';
import About from '../../components/About/About';
import Statement from '../../components/Statement/Statement';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  const [loaderVisibility, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Home">
      <Loader visibility={loaderVisibility} />
      <NavigationBar />
      <div className="page-wrapper">
        <Section id="author" 
                 title="HELLO, WORLD!">
          <Author />
        </Section>
        <Section id="skills-technologies" 
                 title="SKILLS | TECHNOLOGIES"></Section>
        <Section id="about" 
                 title="ABOUT">
          <About />
        </Section>
        <Section id="career-history" 
                 title="CAREER HISTORY"></Section>

        <Statement statement="Write code as if you had to support it for the rest of your life." 
                   author="Yuriy Zubarev" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
