import React from 'react';
import {GeneratePageTitle} from '../App';

/**
 * Home Page
 *
 * @return {React.FC} The home HTML
 */
function Home() {
  return (
    <div data-testid="page-home">
      <GeneratePageTitle title="Ian Cowan" />
    </div>
  );
}

export default Home;

