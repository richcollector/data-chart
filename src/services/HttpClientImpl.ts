export class HttpClientImpl {
	#baseUrl;

	constructor(baseUrl: string) {
		this.#baseUrl = baseUrl;
	}

	async fetch(endPoint: string) {
		const response = await window.fetch(this.#baseUrl + endPoint);

		if (response.ok) {
			return response;
		} else {
			throw response;
		}
	}
}
