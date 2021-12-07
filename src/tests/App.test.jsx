import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter, Redirect} from 'react-router-dom';

import App from '../App';

test('home page renders by default', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId('page-home')).toBeInTheDocument();
});

test('home page renders when navigating to /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByTestId('page-home')).toBeInTheDocument();
});

test('projects page renders at /projects', () => {
  render(
    <MemoryRouter initialEntries={['/projects']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId('page-projects')).toBeInTheDocument();
});

test('contact page renders at /contact', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId('page-contact')).toBeInTheDocument();
});

test('page not found page renders at any non-existent url', () => {
  render(
    <MemoryRouter initialEntries={['/a-route-that-doesnt-exist']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
});

test('all pages have exactly one title', () => {
  const pages = [
    '/',
    '/projects',
    '/contact',
    '/a-route-that-doesnt-exist'
  ];

  for (let page of pages) {
    document.body.innerHTML = "";
    render(
      <MemoryRouter initialEntries={[page]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('page-title')).toBeInTheDocument();
  }
});
