import { createContext, useContext, useEffect, useState } from 'react';
import { IChartDataProvider } from '../utils/types/types';

const ChartDataContext = createContext({});

export const useChartData = () => useContext(ChartDataContext);

export function ChartDataProvider({ children, chartDataService }: IChartDataProvider) {
	const [data, setData] = useState();

	useEffect(() => {
		chartDataService.get().then(datas => {
			setData(datas);
		});
	}, [chartDataService]);

	return <ChartDataContext.Provider value={{ data }}>{children}</ChartDataContext.Provider>;
}
