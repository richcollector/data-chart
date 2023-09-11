import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HttpClientImpl } from './services/HttpClientImpl';
import { ChartDataServiceImpl } from './services/ChartDataServiceImpl';
import { ROUTES } from './utils/constants/constants';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const httpClient = new HttpClientImpl(ROUTES.URL);
const chartDataService = new ChartDataServiceImpl(httpClient);
chartDataService.get().then(res => {
	console.log(res);
});

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
