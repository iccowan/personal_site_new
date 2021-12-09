import {act, render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';

import App from '../App';
import Header from '../components/Header';


test('header renders with app', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByTestId('header-nav-ul')).toBeInTheDocument();
});

test('clicking the expand header button expands the header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-ul').classList).toContain('expanded');
});

test('Ian Cowan label appears after 250ms when expanding the header', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-ian-cowan').classList.contains('hidden')).toBeTruthy();

  await new Promise((r) => setTimeout(r, 250));
  expect(screen.getByTestId('header-nav-span-ian-cowan').classList.contains('hidden')).toBeFalsy();
});

test('Projects label appears after 250ms when expanding the header', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-projects').classList.contains('hidden')).toBeTruthy();

  await new Promise((r) => setTimeout(r, 250));
  expect(screen.getByTestId('header-nav-span-projects').classList.contains('hidden')).toBeFalsy();
});

test('Contact label appears after 250ms when expanding the header', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-contact').classList.contains('hidden')).toBeTruthy();

  await new Promise((r) => setTimeout(r, 250));
  expect(screen.getByTestId('header-nav-span-contact').classList.contains('hidden')).toBeFalsy();
});

test('Collapse label appears after 250ms when expanding the header', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-collapse-button').classList.contains('hidden')).toBeTruthy();

  await new Promise((r) => setTimeout(r, 250));
  expect(screen.getByTestId('header-nav-span-collapse-button').classList.contains('hidden')).toBeFalsy();
});

test('Ian Cowan label disappears immediately when closing the header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-ian-cowan').classList.contains('hidden')).toBeTruthy();
});

test('Projects label disappears immediately when closing the header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-projects').classList.contains('hidden')).toBeTruthy();
});

test('Contact label disappears immediately when closing the header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-contact').classList.contains('hidden')).toBeTruthy();
});

test('Collapse label disappears immediately when closing the header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(expandButton);
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-span-collapse-button').classList.contains('hidden')).toBeTruthy();
});

test('Ian Cowan icon wiggles on hover', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let listItem = screen.getByTestId('header-nav-li-ian-cowan');
  fireEvent.mouseOver(listItem);

  expect(screen.getByTestId('header-nav-li-ian-cowan').classList.contains('wiggle-icon')).toBeTruthy();
});

test('Projects icon wiggles on hover', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let listItem = screen.getByTestId('header-nav-li-projects');
  fireEvent.mouseOver(listItem);

  expect(screen.getByTestId('header-nav-li-projects').classList.contains('wiggle-icon')).toBeTruthy();
});

test('Contact icon wiggles on hover', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let listItem = screen.getByTestId('header-nav-li-contact');
  fireEvent.mouseOver(listItem);

  expect(screen.getByTestId('header-nav-li-contact').classList.contains('wiggle-icon')).toBeTruthy();
});

test('Expand button icon moves in the proper direction on hover', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let listItem = screen.getByTestId('header-nav-li-collapseButton');
  fireEvent.mouseOver(listItem);

  expect(screen.getByTestId('header-nav-li-collapseButton').classList.contains('arrow-move-right')).toBeTruthy();
  expect(screen.getByTestId('header-nav-li-collapseButton').classList.contains('arrow-move-left')).toBeFalsy();

  let collapseButton = screen.getByTestId('header-nav-collapseButton');
  fireEvent.click(collapseButton);

  fireEvent.mouseOver(listItem);
  expect(screen.getByTestId('header-nav-li-collapseButton').classList.contains('arrow-move-right')).toBeFalsy();
  expect(screen.getByTestId('header-nav-li-collapseButton').classList.contains('arrow-move-left')).toBeTruthy();
});

test('Ian Cowan link directs to correct page', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  )

  let listItem = screen.getByTestId('header-nav-li-ian-cowan');
  fireEvent.click(listItem.children[0]);
  expect(screen.getByTestId('page-home')).toBeInTheDocument();
});

test('Projects link directs to correct page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  let listItem = screen.getByTestId('header-nav-li-projects');
  fireEvent.click(listItem.children[0]);

  expect(screen.getByTestId('page-projects')).toBeInTheDocument();
});

test('Contact link directs to correct page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  let listItem = screen.getByTestId('header-nav-li-projects');
  fireEvent.click(listItem.children[0]);

  expect(screen.getByTestId('page-projects')).toBeInTheDocument();
});

test('Clicking the expand header hamburger drops down the nav', () => {
  // No need to set a particular width. We can still click on this hidden
  // item and make sure the logic is running correctly. We will test visuals
  // manually
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-expandHamburger');
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-ul').classList).toContain('expanded');
});

test('Clicking on the expand header hamburger raises the droped down nav', () => {
  // No need to set a particular width. We can still click on this hidden
  // item and make sure the logic is running correctly. We will test visuals
  // manually
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  let expandButton = screen.getByTestId('header-nav-expandHamburger');
  fireEvent.click(expandButton);
  fireEvent.click(expandButton);

  expect(screen.getByTestId('header-nav-ul').classList.contains('expanded')).toBeFalsy();
});

