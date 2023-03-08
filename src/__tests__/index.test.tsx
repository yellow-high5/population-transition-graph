import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from 'pages';

describe('pages/release/index.tsx', () => {
  it('正しく描画されること', () => {
    render(<Home />);

    const title = screen.getByText('Get started by editing');
    expect(title).toBeInTheDocument();
  });
});
