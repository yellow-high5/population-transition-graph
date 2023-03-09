import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PopulationGraph from 'components/population/PopulationGraph';
import { Middleware, SWRConfig, SWRResponse } from 'swr';

describe('components/prefectures/PopulationGraph.tsx', () => {
  it('選択されていない時は選択するように表示すること', () => {
    render(<PopulationGraph selectedPrefList={[]} />);

    const text = screen.getByText('👉 都道府県を選択してください');
    expect(text).toBeInTheDocument();
  });

  it('人口構成のデータ情報が取得できていないときはローディング表示されること', () => {
    const testMiddleware: Middleware = () => {
      return (): SWRResponse<any, any> => {
        return {
          data: undefined,
          error: undefined,
          mutate: (_) => Promise.resolve(),
          isValidating: false,
          isLoading: true,
        };
      };
    };
    render(
      <SWRConfig value={{ use: [testMiddleware] }}>
        <PopulationGraph selectedPrefList={[{ name: '謎の都道府県', code: 48 }]} />
      </SWRConfig>,
    );

    const loadingText = screen.getByText('読み込み中...');
    expect(loadingText).toBeInTheDocument();
  });

  it.skip('グラフの凡例に選択した都道府県名が表示されていること', () => {});
});
