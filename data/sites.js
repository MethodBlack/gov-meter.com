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
			'http://jalshakti-dowr.gov.in',
			'http://shipmin.gov.in',
			'http://jalshakti-dowr.gov.in',
			'http://shipmin.gov.in',
			'https://iscs-eresource.gov.in/web',
			'https://mausam.imd.gov.in/agartala',
			'https://mausam.imd.gov.in/ahmedabad',
			'https://mausam.imd.gov.in/bengaluru',
			'https://mausam.imd.gov.in/dehradun',
			'https://ddpdoo.gov.in/units/NADP',
			'https://cag.gov.in/',
			'https://www.mod.gov.in/dod',
			'https://cgstranchi.gov.in/dhnbad_area.php',
			'https://ceeindia.org/envis',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagecentral',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pageeastern',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagenortheastern',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagenorthern',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagesouthern',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagewestern',
			'https://gstdelhizone.gov.in/south/index-south.php',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=214',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=216',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=217',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=218',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=219',
			'https://iscs-eresource.gov.in/web',
			'https://mausam.imd.gov.in/agartala',
			'https://mausam.imd.gov.in/ahmedabad',
			'https://mausam.imd.gov.in/bengaluru',
			'https://ncdc.gov.in/index1.php?lang=1&level=1&sublinkid=703&lid=550',
			'https://www.psa.gov.in/',
			'https://assamrifles.gov.in',
			'https://www.btsso.org',
			'https://dirbcglab.gov.in',
			'https://www.bcclweb.in',
			'https://hwr.bhel.com',
			'https://www.bharatpetroleum.in',	
			'https://bcplonline.co.in',
			'https://www.bridgeroof.co.in',
			'https://www.celindia.co.in',
			'https://cpwd.gov.in',
			'https://cgstap.gov.in',
			'https://www.indiacoffee.org',
			'https://www.cgcri.res.in',
			'https://www.clri.org',
			'https://www.ccmb.res.in',
			'https://www.iict.res.in',
			'https://indiaculture.gov.in',
			'https://dfccil.com',
			'https://www.drdo.gov.in',
			'https://dof.gov.in',
			'https://www.isro.gov.in',
			'https://dcmsme.gov.in',
			'https://dghs.gov.in',
			'https://iiopr.icar.gov.in',
			'https://disha.gov.in',
			'https://egov.rni.nic.in',
			'https://erpc.gov.in',
			'https://mofpi.gov.in',
			'https://fsi.nic.in',
			'https://www.nbair.res.in',
			'https://www.ndri.res.in',
			'https://iopepc.org',
			'https://www.irctc.co.in',
			'https://mib.gov.in',
			'https://www.kaplindia.com',
			'https://online.ksb.gov.in',
			'https://ldo.gov.in',
			'https://www.nalcoindia.com',
			'https://www.nationalfertilizers.com',
			'https://nhp.mowr.gov.in',
			'https://nationalmuseumindia.gov.in',
			'https://www.nsiindia.gov.in',
			'https://www.ntpc.co.in',
			'https://www.ongcindia.com',
			'https://mpa.gov.in',
			'https://ppac.gov.in',
			'https://www.sscner.org.in',
			'https://www.newindia.co.in',
			'https://wdra.gov.in',
			'https://www.wrldc.in',
			'https://cgstranchi.gov.in/dhnbad_area.php',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagesouthern',
			'https://iscs-eresource.gov.in/web',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagewestern',
			'https://eci.gov.in/',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagenortheastern',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagenorthern',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=219',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=221',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pagecentral',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=217',
			'https://www.mod.gov.in/dod',
			'https://ncdc.gov.in/index1.php?lang=1&level=1&sublinkid=703&lid=550',
			'https://gstdelhizone.gov.in/south/index-south.php',
			'https://www.gsi.gov.in/webcenter/portal/OCBIS/pageeastern',
			'https://nhrc.nic.in/',
			'https://mausam.imd.gov.in/ahmedabad',
			'https://mausam.imd.gov.in/kolkata',
			'https://mausam.imd.gov.in/bengaluru',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=223',
			'https://www.psa.gov.in/',
			'https://niti.gov.in/',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=214',
			'https://mausam.imd.gov.in/agartala',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=218',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=216',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=222',
			'https://cag.gov.in/',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=220',
			'https://mausam.imd.gov.in/dehradun',
			'https://ibm.gov.in/index.php?c=pages&m=index&id=224',
			'https://ddpdoo.gov.in/units/NADP',
			'https://ceeindia.org/envis',
			'https://birdsjute.in/'
		]);

		const fetch = (await import('node-fetch')).default;

		/** @type {string[]} */
		const urls = await fetch('https://cdn.jsdelivr.net/npm/make-in-india@0.0.7/dist/directory.json')
			.then((res) => res.json())
			.then((json) => json.map((site) => site.url).filter((url) => !blocklist.has(url)));

		return {
			name: 'GovMeter',
			description: 'Measuring performance of Indian government sites over time.',
			options: { frequency: 120 },
			urls,
		};
	},
};
