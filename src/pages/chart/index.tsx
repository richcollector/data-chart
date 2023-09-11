import * as S from '../../utils/styles/Chart.style';
import Charts from '../../components/Chart';
import { useChartData } from '../../context/ChartDataContext';
import { useState } from 'react';

export default function ChartPage() {
	const [choiceArea, setChoiceArea] = useState('');
	const area = ['초기화', '성북구', '강남구', '노원구', '중랑구'];
	const response = useChartData();
	console.log('data:::', response);

	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.ChartBox>
						<S.FilterBox>
							{area.map(value => (
								<S.FilterButton
									key={value}
									onClick={() => {
										value === '초기화' ? setChoiceArea('') : setChoiceArea(value);
									}}
								>
									{value}
								</S.FilterButton>
							))}
						</S.FilterBox>
						<S.ChartContentsBox>
							{response && (
								<Charts response={response} choiceArea={choiceArea} setChoiceArea={setChoiceArea} />
							)}
						</S.ChartContentsBox>
					</S.ChartBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
