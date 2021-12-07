import React from 'react';
import {Link} from 'react-router-dom';
import {GeneratePageTitle} from '../App';

/**
 * PageNotFound Page
 *
 * @return {React.FC} The page not found HTML
 */
function PageNotFound() {
  document.title = "Page Not Found";
  return (
    <div data-testid="page-not-found">
      <GeneratePageTitle title="404" />
      <h3>Sorry, the page you're looking for could not be found</h3>
      <p>If you believe this is an error, please use the <Link to="/contact">Contact</Link> form to report an error.</p>
    </div>
  );
}

export default PageNotFound;
