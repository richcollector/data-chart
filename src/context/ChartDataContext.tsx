import { createContext, useContext, useEffect, useState } from 'react';
import { IChartDataProvider } from '../utils/types/types';

const ChartDataContext = createContext<Object>({});

export const useChartData = () => useContext(ChartDataContext);

export function ChartDataProvider({ children, chartDataService }: IChartDataProvider) {
	const [data, setData] = useState<Object>();

	useEffect(() => {
		chartDataService.get().then(datas => {
			const chartData: Object = Object.keys(datas).map(key => ({
				...datas[key],
				time: key.split(' ')[1],
			}));

			setData(chartData);
		});
	}, [chartDataService]);

	return <ChartDataContext.Provider value={{ data }}>{children}</ChartDataContext.Provider>;
}
