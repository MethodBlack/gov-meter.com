module.exports = {
	showcase: async () => {
		const blocklist = new Set([
			'https://planetabhi.com/',
			'https://riseofmachine.com/',
			'https://new-ui.com/',
		]);

		const fetch = (await import('node-fetch')).default;

		/** @type {string[]} */
		const urls = await fetch('https://astro.build/api/showcase.json')
			.then((res) => res.json())
			.then((json) => json.map((site) => site.url).filter((url) => !blocklist.has(url)));

		return {
			name: 'Showcase',
			description: 'Sites from the Astro showcase',
			options: { frequency: 1380 },
			urls,
		};
	},
};
