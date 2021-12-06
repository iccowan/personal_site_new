import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

jest.mock('../pages/Home.jsx');
jest.mock('../pages/Projects.jsx');
jest.mock('../pages/Contact.jsx');

test('home page renders by default', () => {
  Home.mockImplementation(() => <div>HomeMock</div>);
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('HomeMock')).toBeInTheDocument();
});

test('home page renders when navigating to /', () => {
  Home.mockImplementation(() => <div>HomeMock</div>);
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByText('HomeMock')).toBeInTheDocument();
});

test('projects page renders at /projects', () => {
  Projects.mockImplementation(() => <div>ProjectsMock</div>);
  render(
    <MemoryRouter initialEntries={['/projects']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('ProjectsMock')).toBeInTheDocument();
});

test('contact page renders at /contact', () => {
  Contact.mockImplementation(() => <div>ContactMock</div>);
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('ContactMock')).toBeInTheDocument();
});

