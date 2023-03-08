/**
 * 共通 > 都道府県一覧
 * https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
export type ResponsePrefectures = {
  message: null;
  result: { prefCode: number; prefName: string }[];
};

/**
 * 人口マップ > 人口構成 > 人口構成
 * https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
 */
export type ResponsePopulationComposition = {
  message: null;
  result: {
    boundaryYear: number;
    data: { label: string; data: { year: number; value: number; rate?: number }[] }[];
  };
};
