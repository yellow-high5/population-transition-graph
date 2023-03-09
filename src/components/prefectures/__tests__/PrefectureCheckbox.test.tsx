import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PrefectureCheckbox from 'components/prefectures/PrefectureCheckbox';

describe('components/prefectures/PrefectureCheckbox.tsx', () => {
  it('チェックボックスとラベルが確認されること', () => {
    render(
      <PrefectureCheckbox isChecked pref={{ name: '北海道', code: 1 }} onChange={jest.fn()} />,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    const label = screen.getByText('北海道');
    expect(label).toBeInTheDocument();
  });
});
