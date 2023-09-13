import * as S from '../../utils/styles/Chart.style';
import Charts from '../../components/Chart';
import { AREA } from '../../utils/constants/constants';
import { useState } from 'react';

export default function ChartPage() {
	const [choiceArea, setChoiceArea] = useState('');

	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.ChartBox>
						<S.FilterBox>
							<h2>{choiceArea === '' ? '초기화' : choiceArea}</h2>
							{AREA.map(value => (
								<S.FilterButton
									data-testid={value}
									key={value}
									style={value === choiceArea ? S.ActiveStyle : {}}
									onClick={() => {
										value === '초기화' ? setChoiceArea('') : setChoiceArea(value);
									}}
								>
									{value}
								</S.FilterButton>
							))}
						</S.FilterBox>
						<S.ChartContentsBox>
							<Charts choiceArea={choiceArea} setChoiceArea={setChoiceArea} />
						</S.ChartContentsBox>
					</S.ChartBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
