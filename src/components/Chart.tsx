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
	Cell,
} from 'recharts';
import { useChartData } from '../context/ChartDataContext';
import { VALUE_AREA_NAME, VALUE_NAME } from '../utils/constants/constants';
import { IChartsProps, IResponseData, Ichoice } from '../utils/types/types';

export default function Charts({ choiceArea, setChoiceArea }: IChartsProps) {
	const response: IResponseData = useChartData();
	const chartData = response?.data;

	const CustomTooltip = ({ active, payload }: any) => {
		if (active && payload && payload.length) {
			return (
				<div
					className="custom-tooltip"
					style={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px' }}
				>
					<p className="label">{`id: ${payload[0].payload.id}`}</p>
					<p className="label" style={{ color: '#bcbafb' }}>{`value_bar: ${payload[0].value}`}</p>
					<p className="label" style={{ color: 'red' }}>{`value_area: ${payload[1].value}`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<>
			{dataCheck(chartData ?? []) ? (
				<span style={{ fontSize: '30px' }}>...Loading</span>
			) : (
				<ResponsiveContainer width="100%" height="100%">
					<ComposedChart data={chartData}>
						<CartesianGrid stroke="#f5f5f5" />
						<XAxis dataKey="time" scale="band" />
						<YAxis
							yAxisId={`${VALUE_NAME.AREA}`}
							dataKey={`${VALUE_AREA_NAME.AREA}`}
							orientation="left"
							domain={[0, 200]}
							label={{ value: `${VALUE_NAME.AREA}`, angle: -90, position: 'insideLeft' }}
						/>
						<YAxis
							dataKey={`${VALUE_AREA_NAME.BAR}`}
							orientation="right"
							label={{ value: `${VALUE_NAME.BAR}`, angle: 90, position: 'insideRight' }}
						/>

						<Tooltip content={<CustomTooltip />} />
						<Legend />

						<Bar
							dataKey={`${VALUE_AREA_NAME.BAR}`}
							barSize={20}
							fill="#bcbafb"
							onClick={data => setChoiceArea(data.id)}
						>
							{chartData?.map((choice: Ichoice) => (
								<Cell key={choice.id} fill={choice.id === choiceArea ? 'blue' : '#bcbafb'} />
							))}
						</Bar>
						<Area
							yAxisId={`${VALUE_NAME.AREA}`}
							type="monotone"
							dataKey={`${VALUE_AREA_NAME.AREA}`}
							fill="red"
							stroke="red"
						/>
					</ComposedChart>
				</ResponsiveContainer>
			)}
		</>
	);
}

function dataCheck(chartData: Array<object>) {
	return chartData.length ? false : true;
}
