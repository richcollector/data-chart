import { ROUTES } from '../utils/constants/constants';

export class ChartDataServiceImpl {
	#httpClient;

	constructor(httpClient: any) {
		this.#httpClient = httpClient;
	}

	async get() {
		const response = await this.#httpClient.fetch(ROUTES.CHART_DATA);
		return response.json();
	}
}
