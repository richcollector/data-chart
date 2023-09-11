export default function chartDataReducer(state: any, action: any) {
	switch (action.type) {
		case 'requestChartData': {
			return { ...state, isLoading: true };
		}
		case 'loadChartData': {
			return { ...state, chartData: action.chartData, isLoading: false };
		}
		case 'searchChartData': {
			const results = [];

			for (const key in action.chartData) {
				if (action.chartData[key].id === action.areaWord) {
					results.push(action.chartData[key]);
				}
			}

			return {
				...state,
				chartData: results,
				isLoading: false,
			};
		}
	}
}
