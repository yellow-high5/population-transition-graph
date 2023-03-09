import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PrefecturesFilter from 'components/prefectures/PrefecturesFilter';
import { Middleware, SWRConfig, SWRResponse } from 'swr';

describe('components/prefectures/PrefecturesFilter.tsx', () => {
  it('選択されている都道府県にチェックが入っていること', () => {
    const testMiddleware: Middleware = () => {
      return (): SWRResponse<any, any> => {
        return {
          data: {
            message: null,
            result: [
              {
                prefCode: 1,
                prefName: '北海道',
              },
              {
                prefCode: 2,
                prefName: '青森県',
              },
              {
                prefCode: 3,
                prefName: '岩手県',
              },
              {
                prefCode: 4,
                prefName: '宮城県',
              },
            ],
          },
          error: undefined,
          mutate: (_) => Promise.resolve(),
          isValidating: false,
          isLoading: false,
        };
      };
    };
    render(
      <SWRConfig value={{ use: [testMiddleware] }}>
        <PrefecturesFilter
          selectedPrefList={[
            { code: 2, name: '青森県' },
            { code: 4, name: '宮城県' },
          ]}
          onChange={jest.fn()}
          onClear={jest.fn()}
        />
      </SWRConfig>,
    );

    const checkboxs = screen.getAllByRole('checkbox');
    expect(checkboxs).toHaveLength(4);
    expect(checkboxs[0]).not.toBeChecked();
    expect(checkboxs[1]).toBeChecked();
    expect(checkboxs[2]).not.toBeChecked();
    expect(checkboxs[3]).toBeChecked();
  });
});
