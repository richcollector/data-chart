import {
	ComposedChart,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 590,
		pv: 800,
		amt: 1400,
	},
	{
		name: 'Page B',
		uv: 868,
		pv: 967,
		amt: 1506,
	},
	{
		name: 'Page C',
		uv: 1397,
		pv: 1098,
		amt: 989,
	},
	{
		name: 'Page D',
		uv: 1480,
		pv: 1200,
		amt: 1228,
	},
	{
		name: 'Page E',
		uv: 1520,
		pv: 1108,
		amt: 1100,
	},
	{
		name: 'Page F',
		uv: 1400,
		pv: 680,
		amt: 1700,
	},
];

export default function Charts({ chartData }: any) {
	console.log(chartData);
	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<ComposedChart data={chartData}>
					<CartesianGrid stroke="#f5f5f5" />
					<XAxis dataKey="name" scale="band" />
					<YAxis
						dataKey="value_bar"
						orientation="right"
						label={{ value: 'Bar', angle: 90, position: 'insideRight' }}
					/>
					<YAxis
						yAxisId="area"
						dataKey="value_area"
						domain={[0, (max: number) => Math.max(max * 2, 200)]}
						orientation="left"
						label={{ value: 'Area', angle: -90, position: 'insideLeft' }}
					/>
					<Tooltip />
					<Legend />
					<Area type="monotone" dataKey="value_area" fill="#8884d8" stroke="#8884d8" />
					<Bar dataKey="value_bar" barSize={20} fill="#413ea0" />
				</ComposedChart>
			</ResponsiveContainer>
		</>
	);
}
