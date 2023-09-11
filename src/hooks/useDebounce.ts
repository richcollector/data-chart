import { useEffect, useReducer } from 'react';
import { useChartData } from '../context/ChartDataContext';
import chartDataReducer from '../reducer/chartDataReducer';

export default function useDebounce(areaWord: string) {
	const response: { data?: {} } = useChartData();

	const [{ chartData, isLoading, areaData, barData }, dispatch] = useReducer(chartDataReducer, {
		chartData: {},
		isLoading: false,
	});

	useEffect(() => {
		if (areaWord === '') {
			if (response.data !== undefined)
				dispatch({ type: 'loadChartData', chartData: response.data });
		} else if (areaWord) {
			const timeoutId = setTimeout(() => {
				dispatch({ type: 'requestChartData' });
				dispatch({ type: 'searchChartData', chartData: response.data, areaWord });
			}, 500);
			return () => clearTimeout(timeoutId);
		}
	}, [areaWord]);

	return { chartData, areaData, barData, isLoading };
}
