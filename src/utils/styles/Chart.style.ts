import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;
`;

export const ChartBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	width: 50%;
	height: 70%;

	background-color: #f5f2fc;
	border: 1px solid #bdbdbd;

	border-radius: 20px;
`;

export const ChartContentsBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 90%;
	height: 80%;

	border-radius: 15px;
	background-color: #ffffff;
	padding: 20px;
`;

export const FilterBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const FilterInput = styled.input`
	height: 40px;
	width: 60%;

	padding: 10px;
	margin-right: 10px;

	font-size: 20px;

	border-radius: 10px;
	border: none;
`;

export const FilterButton = styled.button`
	width: 20%;
	height: 40px;

	font-size: 20px;
	color: white;

	border-radius: 10px;
	background-color: #404040;
	border: none;

	cursor: pointer;
	:hover {
		color: #404040;
		background-color: #ffffff;
		border: 1px solid #404040;
	}
`;
