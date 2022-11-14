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
			medium: 'phone',
			info: '+91 8495011619'
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
			period: 'Februry 2021 - Present'
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
	]
};
export default STORE;
