module.exports = {
	showcase: async () => {
		const blocklist = new Set([
			'https://presidentofindia.gov.in/',
		]);

		const fetch = (await import('node-fetch')).default;

		/** @type {string[]} */
		const urls = await fetch('https://cdn.jsdelivr.net/npm/make-in-india@0.0.2/src/api/igod/apex-bodies/central/central.json')
			.then((res) => res.json())
			.then((json) => json.map((site) => site.url).filter((url) => !blocklist.has(url)));

		return {
			name: 'Gov Clock',
			description: 'Indian Govt Websites',
			options: { frequency: 1380 },
			urls,
		};
	},
};
