import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import * as S from '../../utils/styles/Chart.style';
import { Charts } from '../../components/Chart';

export default function ChartPage() {
	const [areaWord, setAreaWord] = useState('');
	const { chartData, areaData, barData, isLoading } = useDebounce(areaWord);

	const searchKeyArea = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAreaWord(event.currentTarget.value);
	};

	console.info('chartData', chartData);

	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.ChartBox>
						<S.FilterBox>
							<S.FilterInput
								value={areaWord}
								onChange={searchKeyArea}
								autoFocus
								placeholder="필터링할 지역 이름을 입력해주세요."
							/>
							<S.FilterButton>필터링</S.FilterButton>
						</S.FilterBox>
						<S.ChartContentsBox>
							{isLoading ? (
								<h1>...Loading</h1>
							) : (
								chartData && <Charts chartData={chartData} areaData={areaData} barData={barData} />
							)}
						</S.ChartContentsBox>
					</S.ChartBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
