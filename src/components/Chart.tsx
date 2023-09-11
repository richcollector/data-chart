import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
);

export function Charts({ chartData, areaData, barData }: any) {
	const labels = Object.keys(chartData);
	console.log('labels', labels);

	const options = {
		responsive: true,
		interaction: {
			mode: 'index' as const,
			intersect: false,
		},
		stacked: false,
		plugins: {
			title: {
				display: true,
				text: 'Chart.js Line Chart - Multi Axis',
			},
		},
		scales: {
			Area: {
				type: 'linear' as const,
				display: true,
				position: 'left' as const,
			},
			Bar: {
				type: 'linear' as const,
				display: true,
				position: 'right' as const,
				grid: {
					drawOnChartArea: false,
				},
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Area',
				data: areaData,
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
				yAxisID: 'Area',
			},
			// {
			// 	type: 'bar' as const,
			// 	label: 'Bar',
			// 	backgroundColor: 'rgb(75, 192, 192)',
			// 	data: barData,
			// 	yAxisID: 'Bar',
			// },
		],
	};
	return <Chart type="bar" options={options} data={data} />;
}
