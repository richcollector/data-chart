import { Global } from '@emotion/react';
import { globalStyles } from './utils/styles/Global.Styles';
import { Route, Routes } from 'react-router-dom';
import ChartPage from './pages/chart';
import { ROUTES } from './utils/constants/constants';

function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<Routes>
				<Route path={ROUTES.MAIN}>
					<Route index element={<ChartPage />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
