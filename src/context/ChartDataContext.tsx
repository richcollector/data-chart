import { createContext, useContext, useEffect, useState } from 'react';
import { IChartDataProvider } from '../utils/types/types';

const ChartDataContext = createContext({});

export const useChartData = () => useContext(ChartDataContext);

export function ChartDataProvider({ children, chartDataService }: IChartDataProvider) {
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		chartDataService.get().then(datas => setChartData(datas));
	}, [chartDataService]);

	return (
		<ChartDataContext.Provider value={{ chartData: chartData }}>
			{children}
		</ChartDataContext.Provider>
	);
}
