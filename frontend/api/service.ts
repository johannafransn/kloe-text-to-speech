
const API_BASE_URL = process.env.NEXT_PUBLIC_API_HOST || 'http://0.0.0.0:5000'
if (!API_BASE_URL) throw new Error('API_BASE_URL undefined in .env')

const HEADERS = {
	'Content-Type': 'application/json',
}

const ApiMethods = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
}

const ApiService = {


	postActivitiesAndGetText: async (data: any) => {
		const API_ENDPOINT = '/v1/session/authenticated/data'
		const url = `${API_BASE_URL}${API_ENDPOINT}`
		const options = {
			method: ApiMethods.POST,
			headers: HEADERS,
			body: JSON.stringify(data),
		}
		const response = await fetch(url, options)

		if (response.ok) {
			return await response.json()
		} else {
			throw new Error(
				`Request ${API_ENDPOINT} failed with status ${response.status}`,
			)
		}
	},

}

export default ApiService
