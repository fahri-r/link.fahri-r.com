import type ProfileProps from '~/types/profile';

const profile: ProfileProps = {
	name: 'Muhammad Fahri Ramadhan',
	initials: 'MFR',
	job: 'Software Engineer',
	imgUrl: '/images/avatar.png',
	email: '00.fahri.r@gmail.com',
	socials: [
		{
			href: 'https://github.com/fahri-r',
			icon: 'Github'
		},
		{
			href: 'https://www.linkedin.com/in/fahri-r',
			icon: 'Linkedin'
		},
		{
			href: 'https://www.instagram.com/fahriramadhannnn',
			icon: 'Instagram'
		}
	],
	links: [
		{
			href: 'https://fahri-r.com',
			label: 'Personal Website & Portfolio'
		},
		{
			href: 'https://docs.google.com/document/d/150RAA2sl_BnazJniMPcUp7HRRumrX6yR5_-b5643l-s',
			label: 'Resume'
		}
	]
};

export default profile;
