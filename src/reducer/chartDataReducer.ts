export default function chartDataReducer(state: any, action: any) {
	switch (action.type) {
		case 'requestChartData': {
			return { ...state, isLoading: true };
		}

		case 'loadChartData': {
			const results = Object.keys(action.chartData).map(key => ({
				...action.chartData[key],
				time: key.split(' ')[1],
			}));

			return { ...state, chartData: results, isLoading: false };
		}
	}
}
