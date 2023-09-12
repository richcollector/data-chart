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
							{AREA.map(value => (
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
							<Charts choiceArea={choiceArea} setChoiceArea={setChoiceArea} />
						</S.ChartContentsBox>
					</S.ChartBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
