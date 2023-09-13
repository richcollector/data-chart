import { ROUTES } from '../utils/constants/constants';
import { HttpClientImpl } from './HttpClientImpl';

export class ChartDataServiceImpl {
	#httpClient;

	constructor(httpClient: HttpClientImpl) {
		this.#httpClient = httpClient;
	}

	async get() {
		const response = await this.#httpClient.fetch(ROUTES.CHART_DATA);
		return response.json();
	}
}
