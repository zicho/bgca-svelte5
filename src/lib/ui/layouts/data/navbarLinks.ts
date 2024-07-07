// import { UserIcon, MailIcon, GameIcon, CalendarIcon, SignoutIcon, LoginIcon, RegisterIcon, DashboardIcon } from "$lib/data/icons";
// import type { NavbarLinkProps } from "$lib/components/props/components/NavbarLinkProps";

import type { User } from 'lucia';
import type { NavbarLinkProps } from '../page_elements/props/LayoutProps';
import { DashboardIcon, HomeIcon, LoginIcon, LogoutIcon, ProfileIcon, RegisterIcon } from './icons';

export const homeNavLink: NavbarLinkProps = {
	url: `/`,
	displayText: 'Home',
	id: 'navbar-link-home',
	aria: 'Go to main page',
	icon: HomeIcon,
	authOnly: false
};

const getNavbarLinks = (user?: User): NavbarLinkProps[] => {
	return user
		? [
				{
					url: `/dashboard`,
					displayText: 'Dashboard',
					id: 'navbar-link-dashboard',
					aria: 'Go to dashboard',
					icon: DashboardIcon,
					authOnly: true
				},
				{
					url: `/profile/${user?.username}`,
					displayText: `${user?.username}`,
					id: 'navbar-link-dashboard',
					aria: 'Go to dashboard',
					icon: ProfileIcon,
					authOnly: true
				},
				{
					url: `/logout`,
					displayText: 'Log out',
					id: 'navbar-link-logout',
					aria: 'Log out of this session',
					icon: LogoutIcon,
					authOnly: true
				}
			]
		: [
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

export default getNavbarLinks;
