// import { UserIcon, MailIcon, GameIcon, CalendarIcon, SignoutIcon, LoginIcon, RegisterIcon, DashboardIcon } from "$lib/data/icons";
// import type { NavbarLinkProps } from "$lib/components/props/components/NavbarLinkProps";

import type { NavbarLinkProps } from '../page_elements/props/LayoutProps';
import { DashboardIcon, LoginIcon, RegisterIcon } from './icons';

const generateNavbarLinks = (): NavbarLinkProps[] => {
	return [
		{
			url: `/dashboard`,
			displayText: 'Dashboard',
			id: 'navbar-link-dashboard',
			aria: 'Go to dashboard',
			icon: DashboardIcon,
			authOnly: true
		},
		{
			url: '/login',
			displayText: 'Login',
			id: 'navbar-link-login',
			aria: 'Log in',
			icon: LoginIcon,
			authOnly: false
		},
		{
			url: '/register',
			displayText: 'Register',
			id: 'navbar-link-register',
			aria: 'Register a new user',
			icon: RegisterIcon,
			authOnly: false
		}
	];
};

export default generateNavbarLinks;
