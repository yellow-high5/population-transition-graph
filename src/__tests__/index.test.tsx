import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from 'pages';

describe('pages/release/index.tsx', () => {
  it('正しく描画されること', () => {
    render(<Home />);

    const title = screen.getByText('Population Transition Graph');
    expect(title).toBeInTheDocument();
  });
});
