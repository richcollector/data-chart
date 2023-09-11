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

export default function Charts({ chartData }: any) {
	const CustomTooltip = ({ active, payload }: any) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="label">{`id: ${payload[0].payload.id}`}</p>
					<p className="label">{`value_area: ${payload[0].value}`}</p>
					<p className="label">{`value_bar: ${payload[1].value}`}</p>
				</div>
			);
		}

		return null;
	};
	console.log(chartData);
	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<ComposedChart data={chartData}>
					<CartesianGrid stroke="#f5f5f5" />
					<XAxis dataKey="time" scale="band" />
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
					<Tooltip content={<CustomTooltip />} />
					<Legend />
					<Area type="monotone" dataKey="value_area" fill="red" stroke="red" />
					<Bar dataKey="value_bar" barSize={20} fill="#bcbafb" />
				</ComposedChart>
			</ResponsiveContainer>
		</>
	);
}
