import { apiParallelClient } from 'api/api-client';
import { ResponsePopulationComposition } from 'api/types';
import React, { useMemo } from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import styles from 'styles/index.module.scss';
import useSWR from 'swr';
import { generateRandomColor } from 'util/color';

type Props = {
  selectedPrefList: Prefecture[];
};

const PopulationGraph: React.FC<Props> = (props: Props) => {
  const { selectedPrefList } = props;

  const { data, isLoading } = useSWR<ResponsePopulationComposition[]>(
    selectedPrefList.map((pref) => `/api/v1/population/composition/perYear?prefCode=${pref.code}`),
    apiParallelClient<ResponsePopulationComposition>,
  );

  const graphData = useMemo(() => {
    let graph: { year: number; [code: number]: number }[] = [];
    data?.map((d, index) =>
      d.result.data
        .find((item) => item.label === '総人口')
        ?.data.map((population, i) => {
          if (index === 0) {
            graph.push({ year: population.year, [selectedPrefList[index].code]: population.value });
          } else {
            graph[i] = { ...graph[i], [selectedPrefList[index].code]: population.value };
          }
        }),
    );
    return graph;
  }, [data, selectedPrefList]);

  if (isLoading) {
    return (
      <div className={styles.graphWrapper}>
        <p>読み込み中...</p>
      </div>
    );
  }

  if (graphData.length === 0) {
    return (
      <div className={styles.graphWrapper}>
        <p>👉 都道府県を選択してください</p>
      </div>
    );
  }

  return (
    <div className={styles.graphWrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={graphData} margin={{ top: 48, left: 36 }}>
          <CartesianGrid strokeDasharray="2, 2" />
          <XAxis
            dataKey="year"
            tick={{
              fontSize: '0.75rem',
              fontWeight: 'bold',
            }}
            type="number"
            domain={[1960, 2045]}
            ticks={[1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030, 2040]}
            interval="preserveEnd"
          >
            <Label value="年度" offset={12} position="right" fontSize="0.75rem" />
          </XAxis>
          <YAxis
            tick={{
              fontSize: '0.75rem',
              fontWeight: 'bold',
            }}
            tickFormatter={(value) => value.toLocaleString()}
          >
            <Label value="人口数" offset={24} position="top" fontSize="0.75rem" />
          </YAxis>
          {/* <Tooltip formatter={(value) => value.toLocaleString()} contentStyle={{ fontSize: 12 }} /> */}
          {selectedPrefList.map((pref) => (
            <Line
              key={pref.code}
              name={pref.name}
              dataKey={pref.code}
              type="monotone"
              stroke={generateRandomColor(pref.code)}
            />
          ))}
          <Legend
            align="right"
            verticalAlign="top"
            layout="vertical"
            height={280}
            wrapperStyle={{
              paddingRight: 12,
              overflow: 'scroll',
              fontSize: '0.875rem',
              right: -12,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationGraph;
