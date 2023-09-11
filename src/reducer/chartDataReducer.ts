export default function chartDataReducer(state: any, action: any) {
	const results = [];
	const areaData = [];
	const barData = [];

	switch (action.type) {
		case 'requestChartData': {
			return { ...state, isLoading: true };
		}

		case 'loadChartData': {
			for (const key in action.chartData) {
				areaData.push(action.chartData[key].value_area);
				barData.push(action.chartData[key].value_bar);
				results.push(action.chartData[key]);
			}

			return { ...state, areaData, barData, chartData: action.chartData, isLoading: false };
		}

		case 'searchChartData': {
			for (const key in action.chartData) {
				if (action.chartData[key].id === action.areaWord) {
					areaData.push(action.chartData[key].value_area);
					barData.push(action.chartData[key].value_bar);
					results.push(action.chartData[key]);
				}
			}

			return {
				...state,
				areaData,
				barData,
				chartData: results,
				isLoading: false,
			};
		}
	}
}
