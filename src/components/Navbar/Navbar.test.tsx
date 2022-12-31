import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders avatar image', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const avatarElement = getByAltText(/avatar photo/i);
    expect(avatarElement).toBeDefined();
  });

  test('renders about link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const aboutLink = getByText(/sobre mim/i);
    expect(aboutLink).toBeDefined();
  });

  test('renders resume link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const resumeLink = getByText(/currículo/i);
    expect(resumeLink).toBeDefined();
  });

  test('renders projects link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const projectsLink = getByText(/projetos/i);
    expect(projectsLink).toBeDefined();
  });

  test('renders github link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const githubLink = getByText(/github/i);
    expect(githubLink).toBeDefined();
  });

  test('renders contact link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const contactLink = getByText(/contato/i);
    expect(contactLink).toBeDefined();
  });

  test('renders footer', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const footer = getByText(/@2022 Portfolio - Todos direitos reservados/i);
    expect(footer).toBeDefined();
  });
});
