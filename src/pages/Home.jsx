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
    <div className="scroll-container" onScroll={scrollSnap} data-testid="page-home">
      <ScrollContainer snap="mandatory">
        <ScrollPage page={0}>
          <Animator animation={fadePage}>
            <div className="center" onScroll={scrollSnap}>
              <GeneratePageTitle title="Ian Cowan" />
              <h3 className="home-begin">Scroll to begin...</h3>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <div className="center">
            <Animator animation={fadePage}>
              <h2>Hello, world!</h2>
              <p>Yes, I know this is insane lol</p>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={fadePage}>
            <h2>Hello, world!</h2>
            <p>Yes, I know this is insane lol</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={fadePage}>
            <h2>This is some cool text! `&gt`:)</h2>
            <p>Yes, I know this is insane lol</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={fadePage}>
            <h2>This is some cool text!</h2>
            <p>Yes, I know this is insane lol. This is why I love coding!</p>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

function scrollSnap() {
  let inPagePages = Document.querySelector('div.scroll-container > div > div');
  console.log(inPagePages);
}

export default Home;

