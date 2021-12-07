import React from 'react';
import {GeneratePageTitle} from '../App';
import {Animator, ScrollPage, Move, Fade, Sticky, batch} from 'react-scroll-motion';
import ScrollContainer from '../ScrollContainer';

import '../css/Home.css';

/**
 * Home Page
 *
 * @return {React.FC} The home HTML
 */
function Home() {
  const fadePage = batch(Sticky(), Fade(), Move(0, 300));

  return (
    <div className="scroll-container center" data-testid="page-home">
      <ScrollContainer snap="mandatory">
        <ScrollPage page={0}>
          <Animator animation={fadePage}>
            <GeneratePageTitle title="Ian Cowan" />
            <p className="shimmer"><i class="fas fa-arrow-down"></i> Scroll to begin...</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={fadePage}>
            <h2>Hi, there! <i class="fas fa-glass-cheers"></i></h2>
            <p>I see you've found this extremely early version of my new website!</p>
            <p className="shimmer small">Scroll to continue...</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={fadePage}>
            <h2>The real version is coming soon...</h2>
            <p>There's not much to see here, but I promise the real one is not far away!</p>
            <p className="shimmer small">Scroll to continue...</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={fadePage}>
            <h2>Check back for updates</h2>
            <p>Check at <a href="https://iancowan.me">https://iancowan.me</a> for the real live version</p>
            <p className="shimmer small">Scroll to continue...</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={fadePage}>
            <h2>Thanks for checking in!</h2>
            <p>I hope you enjoyed this preview of my new site! I can't wait for you to see the finished product!</p>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Home;

