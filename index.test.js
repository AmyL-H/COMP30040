// index.test.js

const fs = require('fs');
const path = require('path');
const { getByText, getByRole, getByLabelText } = require('@testing-library/dom');

let container;

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
  document.body.innerHTML = html;
  container = document.body;
});

describe('Cybersecurity Education Homepage', () => {
  test('renders the main header', () => {
    const header = getByText(container, 'Cybersecurity Education');
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('H1');
  });

  test('renders the navigation links', () => {
    const nav = container.querySelector('nav');
    const links = nav.querySelectorAll('a');
    expect(links.length).toBe(4);
    expect(links[0].textContent).toBe('Home');
    expect(links[1].textContent).toBe('Courses');
    expect(links[2].textContent).toBe('About Us');
    expect(links[3].textContent).toBe('Contact');
  });

  test('renders the welcome section with correct content', () => {
    const welcomeHeading = getByText(container, 'Welcome to Your Cybersecurity Journey');
    expect(welcomeHeading).toBeInTheDocument();

    const welcomeParagraph = getByText(container, 'Our platform offers the best resources to help you become an expert in cybersecurity. Join our community and start learning today!');
    expect(welcomeParagraph).toBeInTheDocument();
  });

  test('renders a Get Started button', () => {
    const button = getByText(container, 'Get Started');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button.classList.contains('button')).toBe(true);
  });

  test('renders the Why Cybersecurity card', () => {
    const whyCybersecurityHeading = getByText(container, 'Why Cybersecurity?');
    expect(whyCybersecurityHeading).toBeInTheDocument();

    const whyCybersecurityParagraph = getByText(container, 'Cybersecurity is one of the fastest-growing fields today. Protecting digital assets is more important than ever. Our courses cover all the essential skills to help you succeed.');
    expect(whyCybersecurityParagraph).toBeInTheDocument();
  });

  test('renders the Featured Courses card', () => {
    const featuredCoursesHeading = getByText(container, 'Featured Courses');
    expect(featuredCoursesHeading).toBeInTheDocument();

    const featuredCoursesParagraph = getByText(container, 'From beginner to advanced levels, explore our wide range of courses designed to help you master cybersecurity.');
    expect(featuredCoursesParagraph).toBeInTheDocument();
  });

  test('renders the footer with correct copyright text', () => {
    const footer = container.querySelector('footer');
    const copyrightText = getByText(footer, '© 2024 Cybersecurity Education. All Rights Reserved.');
    expect(footer).toBeInTheDocument();
    expect(copyrightText).toBeInTheDocument();
  });
});
