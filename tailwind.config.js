import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				main: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				app: {
					...require('daisyui/src/theming/themes')['lofi'],
					'base-100': colors.zinc['100'],
					'base-200': colors.zinc['200'],
					'base-300': colors.zinc['300'],
					primary: colors.zinc['900'],
					secondary: colors.zinc['300'],
					'secondary-content': colors.zinc['900'],
					accent: colors.slate['300'],
					'accent-content': colors.stone['800'],
					error: colors.red['500'],
					success: colors.green['400'],
					info: colors.sky['300'],
					warning: colors.amber['300']
				}
			}
		]
	}
};
