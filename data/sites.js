module.exports = {
	showcase: async () => {
		const blocklist = new Set([
			'https://presidentofindia.gov.in/',
			'https://bro.gov.in/',
			'https://main.mohfw.gov.in/organisation/Departments-of-Health-and-Family-Welfare',
			'https://dgll.gov.in',
			'https://dfpd.nic.in/?q=node/89',
			'https://dfpd.nic.in/?q=node/131',
			'https://dfpd.nic.in/?q=node/979',
			'https://dfpd.nic.in/?q=node/981',
			'https://indiacoffee.org',
		]);

		const fetch = (await import('node-fetch')).default;

		/** @type {string[]} */
		const urls = await fetch('https://cdn.jsdelivr.net/npm/make-in-india@0.0.4/dist/directory.json')
			.then((res) => res.json())
			.then((json) => json.map((site) => site.url).filter((url) => !blocklist.has(url)));

		return {
			name: 'Gov Clock',
			description: 'A central hub for all Indian Government websites.',
			options: { frequency: 260 },
			urls,
		};
	},
};
