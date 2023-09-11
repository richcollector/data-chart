import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HttpClientImpl } from './services/HttpClientImpl';
import { ChartDataServiceImpl } from './services/ChartDataServiceImpl';
import { ChartDataProvider } from './context/ChartDataContext';
import { ROUTES } from './utils/constants/constants';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const httpClient = new HttpClientImpl(ROUTES.URL);
const chartDataService = new ChartDataServiceImpl(httpClient);

root.render(
	<ChartDataProvider chartDataService={chartDataService}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ChartDataProvider>,
);
