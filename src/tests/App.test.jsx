import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

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

