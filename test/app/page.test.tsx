import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Component', () => {
  it('renders main element with correct class and heading', () => {
    render(<Home />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('Here goes the content of the page');
  });
});
