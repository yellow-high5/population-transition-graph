import { apiClient } from 'api/api-client';
import { ResponsePrefectures } from 'api/types';
import PrefectureCheckbox from 'components/prefectures/PrefectureCheckbox';
import React from 'react';
import styles from 'styles/index.module.scss';
import useSWR from 'swr';

type Props = {
  selectedPrefList: Prefecture[];
  onChange: (code: number, name: string, isCheck?: boolean) => void;
  onClear: () => void;
};

const PrefecturesFilter: React.FC<Props> = (props: Props) => {
  const { selectedPrefList, onChange, onClear } = props;

  const { data, isLoading } = useSWR<ResponsePrefectures>('/api/v1/prefectures', apiClient);

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  return (
    <div className={styles.filterWrapper}>
      <p className={styles.title}>都道府県別</p>
      <div className={styles.filter}>
        {data?.result.map((item) => (
          <PrefectureCheckbox
            key={item.prefCode}
            isChecked={selectedPrefList.map((i) => i.code).includes(item.prefCode)}
            pref={{ code: item.prefCode, name: item.prefName }}
            onChange={(checked: boolean) => onChange(item.prefCode, item.prefName, checked)}
          />
        ))}
      </div>
      <button onClick={onClear} className={styles.clearButton}>
        Clear
      </button>
    </div>
  );
};

export default PrefecturesFilter;
