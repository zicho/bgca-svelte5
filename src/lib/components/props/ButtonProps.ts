export type ButtonProps = {
	id: string;
	label: string;
	variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'success' | 'info' | 'warning' | 'error';
	outline?: boolean;
	disabled?: boolean;
	classes?: string;
	type?: 'button' | 'submit';
	onclick?: () => void;
};
