import * as S from '../../utils/styles/Chart.style';

export default function ChartPage() {
	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.ChartBox>
						<S.FilterBox>
							<S.FilterInput placeholder="필터링할 지역 이름을 입력해주세요." />
							<S.FilterButton>필터링</S.FilterButton>
						</S.FilterBox>
						<S.ChartContentsBox>chart</S.ChartContentsBox>
					</S.ChartBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
