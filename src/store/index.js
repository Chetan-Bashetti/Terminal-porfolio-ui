const STORE = {
	SKILLS: [
		'HTML5',
		'CSS3',
		'Javascript',
		'ReactJs',
		'Redux',
		'ReactNative',
		'ExpressJs',
		'NodeJs',
		'TypeScript',
		'VueJs',
		'NextJs',
		'React Ionic',
		'Git',
		'Github',
		'Bitbucket',
		'Jira',
		'VSCode',
		'Postman'
	],
	EDUCATION: [
		{
			title: 'Diploma',
			timeline: '2011-14',
			description:
				'Completed Diploma in B.L.D.E.A`s Ploytechnic Vijayapura, Karnataka.'
		},
		{
			title: 'Engineering',
			timeline: '2014-18',
			description:
				' Completed Engineering in PES South Campus Bangalore, Karnataka.'
		}
	],
	CONTACT: [
		{
			medium: 'Email',
			info: 'chetankb619@gmail.com'
		},
		{
			medium: 'phone - India',
			info: '+91 8495011619'
		},
		{
			medium: 'phone - Malaysia',
			info: '+60 018 9474 651'
		}
	],
	ABOUT: {
		profilePic: 'assets/chetan.jpeg',
		name: 'Chetan Bashetti',
		desg: 'Software Developer, ',
		location: 'Bangalore, Karnataka'
	},
	EXPERIANCE: [
		{
			org: 'Rayabhari Technologies, Bangalore.',
			desg: 'Software Developer',
			period: 'August 2018 - December 2020'
		},
		{
			org: 'Vittor Cloud Technologies, Ahmedabad',
			desg: 'Software Developer',
			period: 'Februry 2021 - April 2023'
		},
		{
			org: 'Virtusa, Kuala lumpur, Malayasia',
			desg: 'Senior Software Engineer',
			period: 'June 2023 - Present'
		}
	],
	SOCIAL_LINKS: [
		{
			platform: 'LinkedIn',
			link: 'https://www.linkedin.com/in/chetan-bashetti-651643193/'
		},
		{
			platform: 'Github',
			link: 'https://github.com/Chetan-Bashetti'
		}
	],
	GUI_ROUTES: [
		{
			label: 'Home',
			to: 'home',
			icon: 'home'
		},
		{
			label: 'About',
			to: 'about',
			icon: 'person'
		},
		{
			label: 'Skills',
			to: 'skills',
			icon: 'computer'
		},
		{
			label: 'Work',
			to: 'work',
			icon: 'business_center'
		},
		{
			label: 'Contact',
			to: 'contact',
			icon: 'call'
		}
	],
	experienceData: [
		{
			companyName: 'Virtusa',
			title: 'Senior Software Engineer',
			location:
				'Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia · On-site',
			period: '26th June, 2023 - Present,',
			startYear: 2023,
			clients: [
				{
					clientName: 'Standard Chartered Bank Malaysia',
					workDesc:
						'Worked on Payment based Web Applications, Implementation of Payment authorization mechanisms',
					techStack: [
						'React.Js',
						'TypeScript',
						'JavaScript',
						'SCSS',
						'ExpressJs',
						'Lightning Web Components',
						'React Testing Library',
						'Jest'
					],
					tools: ['BitBucket', 'Azure Dev Ops(ADO)', 'Jira']
				}
			]
		},
		{
			companyName: 'ViitorCloud Technologies Pvt. Ltd',
			title: 'Senior Frontend Developer',
			location: 'Ahmedabad, Gujarat, India',
			startYear: 2021,
			period: 'Feb 2021 - Jun 2023,',
			clients: [
				{
					clientName: 'DP World',
					workDesc:
						'Worked on Yard and Warehouse management systems, Created Transaction management and Tracking applications',
					techStack: [
						'React.Js',
						'TypeScript',
						'JavaScript',
						'Redux',
						'Context API',
						'SCSS',
						'Lerna',
						'React Testing Library',
						'Jest'
					],
					tools: ['Gerrit Code Review', 'Easy Redmines']
				}
			]
		},
		{
			companyName: 'Rayabhari Technologies Pvt. Ltd',
			title: 'Front-End Developer',
			location: 'Bengalore, India',
			startYear: 2018,
			period: 'Aug 2018 - Jan 2021,',
			clients: [
				{
					workDesc:
						'Worked on On-line portfolio management web applications for investors and created applications for On-line review management system called SocialSurvey',
					techStack: [
						'React.Js',
						'JavaScript',
						'Redux',
						'CSS',
						'Next.js',
						'Ant-Design',
						'Material-ui'
					],
					tools: ['Gerrit Code Review', 'Easy Redmines']
				}
			]
		}
	]
};
export default STORE;
