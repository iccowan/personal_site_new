import React from 'react';

function PageNotFound() {
  document.title = "Page Not Found";
  return (
    <div data-testid="page-not-found">
      <h1>404: That page could not be found</h1>
    </div>
  );
}

export default PageNotFound;
