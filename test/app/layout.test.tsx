import { render } from '@testing-library/react';

import RootLayout from '@/app/layout';

jest.mock('next/font/google', () => ({
  Inter: jest.fn(() => ({
    className: 'mock-inter-class-name', // Mock the returned className
  })),
}));

describe('RootLayout', () => {
  it('renders children inside the body', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    // console.log(prettyDOM(container));

    const bodyElement = container.querySelector('body');
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass('mock-inter-class-name'); // Verify the class name

    /// Assert that the child element is rendered inside the body
    const childElement = container.querySelector('body > div');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Test Child');
  });
});
